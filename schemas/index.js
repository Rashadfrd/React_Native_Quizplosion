import * as yup from "yup";

export const quizSchema = yup.object().shape({
  category: yup
    .string()
    .oneOf(["idman", "special"])
    .required("Zəhmət olmasa kateqoriya seçin"),

  level: yup
    .string()
    .oneOf(["easy", "medium", "hard"])
    .required("Zəhmət olmasa çətinlik dərəcəsi seçin"),

  number: yup
    .string()
    .oneOf(["5", "10", "15", "20"])
    .required("Zəhmət olmasa sual sayı seçin"),
});
