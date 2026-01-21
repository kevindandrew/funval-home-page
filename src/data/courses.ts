export interface Course {
  id: number;
  title: string;
  category: string;
  duration: string;
  image: string;
  tags?: string[];
  description: string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Programador Fullstack JavaScript",
    category: "Tecnología",
    duration: "6 Meses",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBPH6XfW0gKdJ6SiJitejhoJd65aIAF36VMP2GeTtSdKUZOsoUIqVec3opPHN_ert4xkn08BhiJAs079ApoCFh7qtSSnYnd_hVx141XVakYYaLD6Dp0HKRVc-xko5p7JcE1jsV5kQkOs1hrujEGRmUXZ0ysCt81r_u-UXZgYCTiO4FFjM-dv5LMUzKg-DBJCF3aOFS0U-GEdJd6Lv9cRGOuCcMU9ExqzABziRXsLnLBce402Bx4GwGsf66Z3FYClYA1qpFnoPyJf91g",
    tags: ["Certified", "New"],
    description:
      "Aprende a crear aplicaciones web modernas desde cero con Node.js, React y bases de datos NoSQL.",
  },
  {
    id: 2,
    title: "Auxiliar de Enfermería Clínica",
    category: "Salud",
    duration: "12 Meses",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAkit7E1GmuBxvSC0PfZX8peK51VGAPfdVf5dMy4oW4RI6__f8bd-EFOjP2gRFD8cN-6vI7BkhuxgrFqj9OefKii4nWGcFz3pJJdl5IwouQKjpnpz0SQQPQIXEynEVar1OTO4OEXOS0BWnk4iE2JPiglQc1-ju5jFMkxunvKILRwajTnKDH2SRNGMd4oIE7CvZr1WvJ1HaeJvK2nI7rMDYSR_2XS4a2Ym2Wn-K7vjOZssbOd_S5VEGKdbVG4VaqOStQAMwKGQsbMv2V",
    tags: ["Certified"],
    description:
      "Capacitación integral en cuidados básicos, primeros auxilios y asistencia en entornos hospitalarios.",
  },
  {
    id: 3,
    title: "Mecánica Automotriz Especializada",
    category: "Técnico",
    duration: "9 Meses",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAO0Enir8zlG5qZM_8sgQz4t4gqj0zZ14tyzAvf0L96mTWxbVER4iAlrIJGmUORP_rwi1nkOANh_Udl8WX5zhurw4V7wI9mi687Hts-ymEPveMm9Qo5lZS_7w-iE5B4-e0JSKCSclZUsrbfWaLFjMSjxDlMzs1rClHWCXEbza6_grFFEiMwrwZ5E42paCGKqJZn_W6bxGft07LqjU9DfO7wn9y3qVqwBuT6CGmTXwYsh_eB2fKegpkRu7uYOth8CSfjcoznK7lBFS_v",
    tags: ["New"],
    description:
      "Domina el diagnóstico por computadora, sistemas eléctricos y reparación de motores modernos.",
  },
  {
    id: 4,
    title: "Seguridad en Redes",
    category: "Tecnología",
    duration: "4 Meses",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAbYuXDSmyN94FfxbD36N04_VdsHa91DoTmwMG06di9P4Z4ssTK-WH-jPJyNt7Yllf72KJTXRXEeTakD2jPbYVCgOUpVEEq54E9rJycNMxhVciciVLkO_ksOWeZT1S65y2RhWHr3bhNdC0PFGfDdfiKDivMsRidvZTwUm-tIkWUfsZ4dUL-eEc1xbaInN_bp8fioN31oN_cF3jrhQTYUnis6TAb44R-yCYrXJoqzMGhT8NeZJYiLX-U_FA0I9JzWIy9jejaBY4PHFND",
    tags: ["Certified"],
    description:
      "Instalación y configuración de redes empresariales bajo estándares internacionales de seguridad.",
  },
  {
    id: 5,
    title: "Inglés para Profesionales IT",
    category: "Idiomas",
    duration: "8 Meses",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAc31IAiCvQutLmtDkuvkL-xZXSRh6J9qdXZWRmxmJ6hlpCllkioqFYWQKIoO4QbaQ1XFT4nqfPuMClHF-2aYWp2acApy1dhOXMSC8VSC5d3G2h29xjeNF2KYLismyG4Q55PRTuKTIB_NfmsKf0pMLCVlN555r9001MxR9IGANC5_TAEDT0OC4XYKv0dYLGljSYvuNabs9t5rBvbSGs4w2MFAU3o0rXpjkUQp8rfzmdKjRpZcZEw9YbDJjf5TqZ5EUC_TjVTXvQhB1l",
    tags: [],
    description:
      "Mejora tu comunicación técnica y prepárate para entrevistas laborales internacionales.",
  },
  {
    id: 6,
    title: "Instalación de Climatización",
    category: "Técnico ",
    duration: "5 Meses",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBWvOQodeYk4jZUqnzYwA8OC5zuzM1xodV6a5TTPt8updMpeFaE7M7RIWg8aid5k_Djkjcjph9x0dU9ZFN4UR1BkiuxngoEWBJCg9zLby7SGeQ-f4XZhun6qbabEl8-DHUjFbmi-kXi_LDWmzSmPuVLsDKRmIO29IrAsUjkIjjSscgE9Vbqh-h8TvnPSqq7SNz4EIWfQL3dUT2iwiNd-eALiFzkTg9sr69S8Jc_ee1JYuOd519FmvZs1NgxaEEm0CXckKAQllkSwWtc",
    tags: ["New"],
    description:
      "Curso práctico sobre instalación y mantenimiento de aires acondicionados y refrigeración comercial.",
  },
];
