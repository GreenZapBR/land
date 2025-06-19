
'use client'

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const plans = {
  disparo: [{ title: "Plano Essencial", price: "R$ 300/mês", features: ["Mensagens"], infrastructure: [] }],
  join: [{ title: "Plano Join", price: "R$ 200/mês", features: ["Entrar em grupos"], infrastructure: [] }]
};

export default function HomePage() {
  const [view, setView] = useState("disparo");
  const videoMap = {
    disparo: "https://www.youtube.com/embed/U3kmN9cETXM",
    join: "https://www.youtube.com/embed/I0ndqD-usrg"
  };

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-center text-3xl font-bold mb-6">GreenZap</h1>
      <div className="flex justify-center gap-4 mb-6">
        <Button onClick={() => setView("disparo")} className="bg-purple-600 text-white">Disparo</Button>
        <Button onClick={() => setView("join")} className="bg-gray-800 text-white">Auto Join</Button>
      </div>
      <section className="grid md:grid-cols-2 gap-4">
        {plans[view].map((plan, i) => (
          <Card key={i}>
            <CardContent>
              <h2 className="text-xl font-bold">{plan.title}</h2>
              <ul>
                {plan.features.map((f, idx) => <li key={idx}>{f}</li>)}
              </ul>
              <p>{plan.price}</p>
            </CardContent>
          </Card>
        ))}
      </section>
      <section className="mt-10">
        <h3 className="text-2xl mb-4">Veja como funciona</h3>
        <div className="aspect-video">
          <iframe
            src={videoMap[view]}
            title="Demonstração"
            frameBorder="0"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
