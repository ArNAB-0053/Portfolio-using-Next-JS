export interface EnvConfig {
  emailjs: {
    serviceId: string | undefined;
    templateId: string | undefined;
    publicKey: string | undefined;
  };
  projects: {
    nodeEnv: string | undefined;
    revalidateSeconds: string | undefined;
  };
}

export const envConfig: EnvConfig = {
  emailjs: {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  },
  projects: {
    nodeEnv: process.env.NEXT_PUBLIC_NODE_ENV,
    revalidateSeconds: process.env.NEXT_PUBLIC_PROJECTS_REVALIDATE_SECONDS,
  },
};
