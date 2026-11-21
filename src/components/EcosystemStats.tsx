import { Server, Shield, Smartphone, Zap } from 'lucide-react';
import React from 'react';

export const EcosystemStats: React.FC = () => {
  const stats = [
    {
      value: '5',
      label: 'Client Systems Portfolio',
      sub: 'Thrivefold, Neev, HarmonyBloom, BlinkQuest, Setu',
      icon: <Smartphone className="w-5 h-5 text-[#D77259]" />,
    },
    {
      value: '65',
      label: 'ORM Relational Models',
      sub: 'Centralized PostgreSQL schema with pgvector RAG',
      icon: <Server className="w-5 h-5 text-[#7D9C7B]" />,
    },
    {
      value: '0 Bytes',
      label: 'Ephemeral RAM Processing',
      sub: 'Pose & ocular vision frames processed in RAM only',
      icon: <Shield className="w-5 h-5 text-[#D77259]" />,
    },
    {
      value: '120+ Mbps',
      label: 'Offline Swarm Mesh',
      sub: 'High-speed local Wi-Fi Direct peer-to-peer sync',
      icon: <Zap className="w-5 h-5 text-[#7D9C7B]" />,
    },
  ];

  return (
    <section className="relative py-12 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-7 rounded-[28px] bg-white transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-[#FAF7F2]">
                  {stat.icon}
                </div>
                <span className="text-3xl sm:text-4xl font-bold text-[#191918] font-serif">
                  {stat.value}
                </span>
              </div>
              <h4 className="text-sm font-semibold text-[#191918]">{stat.label}</h4>
              <p className="text-xs text-[#5C584E] mt-1.5 leading-relaxed">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
