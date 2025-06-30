import React, { useState } from 'react';
import { Section, Card, Icon, Button } from '../ui';
import { CONTACT_INFO, PERSONAL_INFO } from '../../constants/portfolio-data';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Crear enlace mailto con la información del formulario
    const subject = encodeURIComponent(formData.subject || 'Contacto desde Portfolio');
    const body = encodeURIComponent(
      `Hola ${PERSONAL_INFO.name},\n\n${formData.message}\n\n` +
      `Saludos,\n${formData.name}\n${formData.email}`
    );
    
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <Section
      id="contact"
      title="Contacto"
      subtitle="¿Tienes un proyecto en mente? ¡Hablemos!"
    >
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">
              Información de Contacto
            </h3>
            <div className="space-y-6">
              {/* Email */}
              <Card variant="bordered" padding="lg" className="group hover:border-primary-300 transition-colors">
                <div className="flex items-center">
                  <div className="p-3 bg-primary-50 rounded-lg mr-4 group-hover:bg-primary-100 transition-colors">
                    <Icon name="Mail" size={24} className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Email</h4>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
              </Card>

              {/* Phone */}
              <Card variant="bordered" padding="lg" className="group hover:border-primary-300 transition-colors">
                <div className="flex items-center">
                  <div className="p-3 bg-primary-50 rounded-lg mr-4 group-hover:bg-primary-100 transition-colors">
                    <Icon name="Phone" size={24} className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Teléfono</h4>
                    <a
                      href={`tel:+51${CONTACT_INFO.phone}`}
                      className="text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      +51 {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>
              </Card>

              {/* Location */}
              <Card variant="bordered" padding="lg" className="group hover:border-primary-300 transition-colors">
                <div className="flex items-center">
                  <div className="p-3 bg-primary-50 rounded-lg mr-4 group-hover:bg-primary-100 transition-colors">
                    <Icon name="MapPin" size={24} className="text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Ubicación</h4>
                    <span className="text-neutral-600">{CONTACT_INFO.location}</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold text-neutral-900 mb-6">
              Enlaces Sociales
            </h3>
            <div className="flex space-x-4">
              {CONTACT_INFO.socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-primary-50 rounded-xl hover:bg-primary-100 transition-all duration-300 hover:scale-110 group"
                >
                  <Icon 
                    name={social.icon} 
                    size={24} 
                    className="text-primary-600 group-hover:text-primary-700 transition-colors" 
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Availability */}
          <Card variant="elevated" padding="lg">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse" />
              <div>
                <h4 className="font-semibold text-neutral-900">Disponible para Proyectos</h4>
                <p className="text-neutral-600 text-sm">
                  Abierto a nuevas oportunidades y colaboraciones
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Contact Form */}
        <div>
          <Card variant="elevated" padding="xl">
            <h3 className="text-2xl font-bold text-neutral-900 mb-6">
              Envíame un Mensaje
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="¿De qué quieres hablar?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                  placeholder="Cuéntame sobre tu proyecto o idea..."
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
              >
                <Icon name="Send" size={20} className="mr-2" />
                Enviar Mensaje
              </Button>
            </form>

            <div className="mt-6 p-4 bg-neutral-50 rounded-lg">
              <p className="text-sm text-neutral-600 text-center">
                <Icon name="Clock" size={16} className="inline mr-1" />
                Respondo típicamente en 24 horas
              </p>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection; 