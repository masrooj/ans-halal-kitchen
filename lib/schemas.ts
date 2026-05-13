import { z } from "zod";

export const reservationSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(10, "Enter a valid phone number"),
  date: z.string().min(1, "Choose a date"),
  partySize: z.enum(["1", "2", "3", "4", "5", "6+"]),
  time: z.string().min(1, "Choose a time"),
  requests: z.string().optional(),
  catering: z.boolean(),
});

export type ReservationInput = z.infer<typeof reservationSchema>;

export const contactSchema = z.object({
  name: z.string().min(2, "Enter your name"),
  email: z.string().email("Enter a valid email"),
  subject: z.string().min(3, "Enter a subject"),
  message: z.string().min(10, "Message is too short"),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email"),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;
