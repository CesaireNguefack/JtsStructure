import { Injectable } from '@nestjs/common';
import { ReservationStatus } from '@prisma/client';
import * as fs from "fs";
import * as path from "path";
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ReservationService {

    constructor(private prisma: PrismaService) { }

    async createReservation(data: {
        name: string, email: string, message: string, date: Date, idService: number, street: string, zipcode: string, city: string
    }) {
        const idService = Number(data.idService);
        await this.ensureServiceExists(idService);

        return this.prisma.reservation.create({
            data: {
                ...data,
                idService,
                date: new Date(data.date),
                status: ReservationStatus.PENDING
            }
        })
    }

    private async ensureServiceExists(id: number) {
        const existingService = await this.prisma.service.findUnique({
            where: { id },
        });

        if (existingService) return existingService;

        const service = this.findServiceData(id);

        if (!service) {
            throw new Error(`Service with id ${id} not found`);
        }

        return this.prisma.service.create({
            data: {
                id,
                titre: service.title,
                description: service.description1 || service.description || service.title,
                price: 0,
            },
        });
    }

    private findServiceData(id: number) {
        if (id === 0) {
            return {
                id: 0,
                title: "",
                description1: "Demande d'evaluation generale",
                description: "Demande d'evaluation generale",
            };
        }

        const filePath = path.join(process.cwd(), "service_data", "fr.json");
        const services = JSON.parse(fs.readFileSync(filePath, "utf-8"));

        return services.find((service: { id: number }) => service.id === id);
    }

    async getReservations() {
        return this.prisma.reservation.findMany({
            include: {
                service: true
            },
            orderBy: { createdAt: "desc" }
        })
    }

    async updateStatus(id: number, status: ReservationStatus) {
        try {
            const updated = await this.prisma.reservation.update({
                where: { id },
                data: { status: status }
            })

            return {
                status: "success",
                message: "successfully updated",
                data: updated,
            }
        } catch (err:any) {
            console.error(err)
            return {
                status: "error",
                message: "Failed : " + err.message,
                data: null,
            }
        }
    }

    async findById(id: number) {
        try {
            const reservation = await this.prisma.reservation.findUnique({
                where: { id },
                include: { service: true }
            });

            if (!reservation) {
                return {
                    status: "error",
                    message: `Reservation with id ${id} not found`,
                    data: null,
                };
            }

            return {
                status: "success",
                message: "Reservation success",
                data: reservation,
            };
        } catch (err:any) {
            console.error(err);
            return {
                status: "error",
                message: "Failed: " + err.message,
                data: null,
            };
        }
    }

    async deleteReservation(id: number) {
        const reservation = await this.prisma.reservation.findUnique({
            where: { id },
        })

        if (!reservation) {
            return {
                status: "error",
                message: "Reservation not found",
                data: null,
            }
        }

        await this.prisma.reservation.delete({
            where: { id },
        })

        return {
            status: "success",
            message: "Reservation deleted",
        }
    }
}
