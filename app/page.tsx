'use client';

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const plans = {
  disparo: [
    {
      title: "Plano Essencial",
      price: "R$ 300/mês",
      features: [
        "Envio de mensagens para telefones e leads de comunidade",
        "Criação de fluxos de resposta",
        "Mensagens com parâmetros personalizados",
        "Extração de membros de comunidades",
        "Atualização de perfil",
      ],
      infrastructure: ["1 acesso incluído (pronto para conectar)"]
    },
    {
      title: "Plano Automação",
      price: "R$ 500/mês",
      features: [
        "Envio automático para membros que entrarem nos grupos (Auto DM)",
        "Envio de mensagens para telefones e leads de comunidade",
        "Criação de fluxos de resposta",
        "Mensagens com parâmetros personalizados",
        "Extração de membros de comunidades",
        "Atualização de perfil",
        "Identificação em tempo real de números desconectados",
      ],
      infrastructure: ["1 acesso incluído (pronto para conectar)"]
    },
    {
      title: "Plano Expansão",
      price: "R$ 1.000/mês",
      features: [
        "Envio de mensagens para telefones e leads de comunidade",
        "Criação de fluxos de resposta",
        "Mensagens com parâmetros personalizados",
        "Extração de membros de comunidades",
        "Atualização de perfil",
        "Identificação em tempo real de números desconectados",
      ],
      infrastructure: [
        "10 acessos da ferramenta",
        "Licenças da Z-API adquiridas por conta própria"
      ]
    }
  ],
  join: [
    {
      title: "Plano Join",
      price: "R$ 200/mês",
      features: [
        "Verifique e tenha todos os links do SendFlow, DevZapp e entre outros.",
        "Habilite para entrar nos grupos automáticos."
      ],
      infrastructure: []
    }
  ]
};

export default function HomePage() {
  const [view, setView] = useState("disparo");

  const videoMap = {
    disparo: "https://www.youtube.com/embed/U3kmN9cETXM",
    join: "https://www.youtube.com/embed/I0ndqD-usrg"
  };

  return (
    <main className="min-h-screen bg-black text-white px-4 py-10 md:px-8 lg:px-20 relative" aria-label="Página inicial GreenZap">
      <header className="text-center mb-12 px-4">
        <motion.div
          className="flex justify-center mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src="https://i.ibb.co/99JnSVK4/Frame-3.png" alt="Logo GreenZap" width={180} height={40} className="mx-auto max-w-full h-auto" />
        </motion.div>
        <motion.p
          className="text-lg text-gray-300 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Soluções de automação para WhatsApp
        </motion.p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button
            onClick={() => setView("disparo")}
            className={`rounded-full px-6 py-2 text-sm font-medium ${view === "disparo" ? "bg-purple-600 text-white" : "bg-gray-800 text-gray-400"}`}
          >
            Disparo
          </Button>
          <Button
            onClick={() => setView("join")}
            className={`rounded-full px-6 py-2 text-sm font-medium ${view === "join" ? "bg-purple-600 text-white" : "bg-gray-800 text-gray-400"}`}
          >
            Auto Join Groups
          </Button>
        </div>
      </header>

      <section aria-label="Planos disponíveis" className={`grid gap-8 ${view === "disparo" ? "md:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"}`}>
        {plans[view].map((plan, i) => (
          <motion.article
            key={plan.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            role="region"
            aria-labelledby={`plano-${i}`}
          >
            <Card className="bg-[#181818] border border-purple-500 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition-shadow h-full flex flex-col justify-between">
              <CardContent className="p-6 flex flex-col h-full">
                <div>
                  <h2 id={`plano-${i}`} className="text-xl font-semibold mb-4 text-purple-400">
                    {plan.title}
                  </h2>
                  <ul className="mb-4 space-y-2 text-sm text-white">
                    {plan.features.map((f, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-4 h-4 text-green-400 mr-2 mt-1" aria-hidden="true" />
                        <span className="text-white/90">{f}</span>
                      </li>
                    ))}
                  </ul>
                  {plan.infrastructure.length > 0 && (
                    <>
                      <h3 className="text-green-500 font-medium mb-2">Infraestrutura:</h3>
                      <ul className="mb-6 space-y-1 text-white/80 text-sm">
                        {plan.infrastructure.map((item, idx) => (
                          <li key={idx} className="ml-6 list-disc">{item}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
                <div className="text-center mt-auto">
                  <p className="text-2xl font-bold text-purple-400 mb-4">{plan.price}</p>
                  <a
                    href={`https://wa.me/551152863970?text=${encodeURIComponent(`Quero assinar o plano ${plan.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full"
                  >
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 rounded-xl text-white text-sm font-medium py-2">
                      Assinar
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.article>
        ))}
      </section>

      <section className="mt-16 max-w-4xl mx-auto text-center px-4">
        <h3 className="text-2xl font-semibold text-purple-400 mb-6">Veja como funciona</h3>
        <div className="relative w-full pt-[56.25%] rounded-xl overflow-hidden shadow-lg border border-purple-600">
          <iframe
            src={videoMap[view]}
            title="Demonstração do produto"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-xl"
          ></iframe>
        </div>
      </section>

      <a
        href="https://wa.me/551152863970?text=Olá!%20Tenho%20interesse%20em%20saber%20mais%20sobre%20a%20GreenZap."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 md:bottom-6 md:right-6"
      >
        <Button className="bg-green-600 hover:bg-green-700 rounded-full text-white px-6 py-3 text-sm md:text-base font-medium shadow-lg">
          Falar com o suporte
        </Button>
      </a>
    </main>
  );
}
