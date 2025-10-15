import { z } from "zod";

export const melhorProjetoSchema = z.object({
  email: z.string().email("Email inválido"),
  name: z.string().min(3, "Nome precisa ter no mínimo 3 caracteres"),
  course: z.string().min(1, "Selecione um curso"),
  class: z.string().min(1, "Classe é obrigatória"),
});

export const certificadoSimplesSchema = z.object({
  email: z.string().email("Email inválido"),
  name: z.string().min(3, "Nome precisa ter no mínimo 3 caracteres"),
});

export type MelhorProjetoForm = z.infer<typeof melhorProjetoSchema>;
export type CertificadoSimplesForm = z.infer<typeof certificadoSimplesSchema>;
