import React, { useState } from 'react';
import { Section, Card, Icon, Button } from '../ui';
import { CONTACT_INFO, PERSONAL_INFO } from '../../constants/portfolio-data';

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-secondary-700 bg-secondary-900/80 text-secondary-100 placeholder:text-secondary-600 focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-colors';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject || 'Contacto desde Portfolio');
    const body = encodeURIComponent(
      `Hola ${PERSONAL_INFO.name},\n\n${formData.message}\n\nSaludos,\n${formData.name}\n${formData.email}`
    );
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <Section
      id="contact"
      eyebrow="Contacto"
      title="Hablemos de tu próximo sistema"
      subtitle="Respuesta típica en 24 h. Ideal si buscas alguien que piense en integraciones, datos y operación desde el día uno."
      className="bg-secondary-900/35 border-t border-secondary-800/60"
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <Card variant="bordered" padding="lg" className="group">
              <div className="flex items-center gap-4">
                <div className="rounded-xl border border-primary-500/25 bg-primary-500/10 p-3">
                  <Icon name="Mail" size={22} className="text-primary-300" aria-hidden />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-100">Email</h4>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm text-primary-300 hover:text-primary-200 break-all">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
            </Card>

            <Card variant="bordered" padding="lg">
              <div className="flex items-center gap-4">
                <div className="rounded-xl border border-primary-500/25 bg-primary-500/10 p-3">
                  <Icon name="Phone" size={22} className="text-primary-300" aria-hidden />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-100">Teléfono</h4>
                  <a href={`tel:+51${CONTACT_INFO.phone}`} className="text-sm text-primary-300 hover:text-primary-200">
                    +51 {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>
            </Card>

            <Card variant="bordered" padding="lg">
              <div className="flex items-center gap-4">
                <div className="rounded-xl border border-primary-500/25 bg-primary-500/10 p-3">
                  <Icon name="MapPin" size={22} className="text-primary-300" aria-hidden />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-100">Ubicación</h4>
                  <p className="text-sm text-secondary-400">{CONTACT_INFO.location}</p>
                </div>
              </div>
            </Card>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-secondary-500 mb-3">Redes</h3>
            <div className="flex flex-wrap gap-2">
              {CONTACT_INFO.socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-secondary-700 bg-secondary-900/50 px-4 py-2.5 text-secondary-300 hover:border-primary-500/35 hover:text-primary-200 text-sm font-medium transition-colors inline-flex items-center gap-2"
                >
                  <Icon name={social.icon} size={18} aria-hidden />
                  {social.platform}
                </a>
              ))}
            </div>
          </div>

          <Button variant="gradient" size="lg" href="/Kenyi_Ivan_Vega_Aliaga_CV_2025_6_25.pdf" external className="w-full justify-center">
            <Icon name="Download" size={20} className="mr-2" aria-hidden />
            Descargar CV (PDF)
          </Button>

          <Card variant="elevated" padding="lg">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
              </span>
              <div>
                <h4 className="font-semibold text-secondary-100">Disponible para proyectos</h4>
                <p className="text-secondary-500 text-sm">Colaboración remota o presencial en Lima.</p>
              </div>
            </div>
          </Card>
        </div>

        <div>
          <Card variant="gradient-border" padding="xl">
            <h3 className="font-display text-xl font-bold text-secondary-100 mb-2">Mensaje directo</h3>
            <p className="text-secondary-500 text-sm mb-6">
              El envío abre tu cliente de correo con el texto prellenado; no almaceno datos en servidor.
            </p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-secondary-300 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={inputClass}
                  placeholder="Tu nombre"
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={inputClass}
                  placeholder="tu@email.com"
                  autoComplete="email"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-secondary-300 mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className={inputClass}
                  placeholder="Integración, MVP, consultoría…"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary-300 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className={`${inputClass} resize-none`}
                  placeholder="Contexto, plazos y stack actual si aplica…"
                />
              </div>
              <Button type="submit" variant="primary" size="lg" className="w-full justify-center">
                <Icon name="Send" size={20} className="mr-2" aria-hidden />
                Abrir correo
              </Button>
            </form>
            <p className="mt-4 text-xs text-secondary-600 text-center flex items-center justify-center gap-1">
              <Icon name="Clock" size={14} aria-hidden />
              Respondo en ~24 horas hábiles
            </p>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
