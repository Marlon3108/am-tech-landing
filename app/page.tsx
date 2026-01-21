"use client"; 

import { useState } from "react";
import Image from "next/image"; // Importamos componente de imagen
import { Menu, X, Monitor, Server, Shield, Megaphone, TrendingUp, Smartphone, ChevronRight, CheckCircle2 } from "lucide-react";
import { sendEmail } from "./actions"; 

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    setFormStatus("Enviando...");
    const result = await sendEmail(formData);
    if (result.success) {
      setFormStatus("¡Gracias! Hemos recibido tu solicitud. Te contactaremos pronto.");
    } else {
      setFormStatus("Error técnico. Por favor escríbenos al WhatsApp.");
    }
  }

  return (
    <main className="min-h-screen bg-brand-light text-brand-dark selection:bg-brand-teal selection:text-white">
      
      {/* NAVBAR */}
      <nav className="fixed w-full z-50 top-0 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* LOGO */}
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
              <div className="relative w-48 h-16 md:w-56 md:h-20">
                 {/* Asegúrate de guardar la imagen en la carpeta 'public' como logo.jpg */}
                 <Image 
                   src="/logo.jpg" 
                   alt="A&M Tech Logo" 
                   fill
                   className="object-contain object-left"
                   priority
                 />
              </div>
            </div>
            
            <div className="hidden md:flex space-x-8 items-center">
              {['Inicio', 'Servicios', 'Nosotros', 'Contacto'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-brand-teal font-medium transition-colors text-sm uppercase tracking-wide">
                  {item}
                </a>
              ))}
              <a href="#contacto" className="bg-brand-orange hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-orange-500/20 text-sm">
                Diagnóstico Gratis
              </a>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 p-2">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Menú Móvil */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl h-screen">
            <div className="px-6 pt-8 pb-6 space-y-4">
              {['Inicio', 'Servicios', 'Nosotros', 'Contacto'].map((item) => (
                <a key={item} 
                   href={`#${item.toLowerCase()}`}
                   onClick={() => setIsMenuOpen(false)}
                   className="block px-3 py-4 text-xl font-bold text-gray-800 border-b border-gray-100">
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="inicio" className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 relative overflow-hidden bg-brand-dark">
        {/* Fondo decorativo */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0F172A_50%,#0a1525_100%)]"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-teal/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-teal text-sm font-semibold tracking-wide backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Disponible para nuevos proyectos en Cali
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
              Ingeniería que sostiene, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-red-400">Marketing que vende.</span>
            </h1>
            
            <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
              De nada sirve un sistema robusto si nadie conoce tu marca. De nada sirve viralizarte si tu operación colapsa. En <strong>A&M Tech</strong> unificamos ambos mundos para que tu PYME crezca sin dolores de cabeza.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="bg-brand-teal hover:bg-teal-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(1,148,182,0.3)] hover:shadow-[0_0_30px_rgba(1,148,182,0.5)] flex items-center justify-center gap-2">
                Solicitar Propuesta <ChevronRight size={20}/>
              </a>
              <a href="#servicios" className="bg-transparent hover:bg-white/5 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all backdrop-blur-sm text-center">
                Explorar Soluciones
              </a>
            </div>
          </div>
          
          {/* Ilustración abstracta con CSS puro */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[500px] bg-gradient-to-tr from-brand-teal/20 to-brand-orange/20 rounded-3xl border border-white/10 backdrop-blur-3xl p-8 flex items-center justify-center">
               <div className="text-center space-y-4">
                 <div className="w-24 h-24 bg-brand-teal rounded-2xl mx-auto shadow-2xl shadow-teal-500/50 flex items-center justify-center text-white">
                    <Server size={48} />
                 </div>
                 <div className="w-1 h-16 border-l-2 border-dashed border-gray-500 mx-auto"></div>
                 <div className="w-24 h-24 bg-brand-orange rounded-full mx-auto shadow-2xl shadow-orange-500/50 flex items-center justify-center text-white">
                    <TrendingUp size={48} />
                 </div>
               </div>
               {/* Tarjetas flotantes decorativas */}
               <div className="absolute top-10 right-10 bg-brand-dark p-4 rounded-xl border border-white/10 shadow-xl animate-bounce duration-[3000ms]">
                 <p className="text-green-400 text-xs font-mono">Server Status: Online</p>
               </div>
               <div className="absolute bottom-10 left-10 bg-brand-dark p-4 rounded-xl border border-white/10 shadow-xl animate-bounce duration-[4000ms]">
                 <p className="text-brand-orange text-xs font-mono">ROI: +150% Growth</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS DETALLADOS */}
      <section id="servicios" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-20">
            <h2 className="text-brand-teal font-bold tracking-widest uppercase text-sm mb-2">Nuestra Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-brand-dark">Dos pilares, un objetivo: <span className="text-brand-orange">Tu Crecimiento</span></h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Columna TI */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-brand-teal/10 rounded-2xl text-brand-teal">
                   <Monitor size={40} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-brand-dark">Infraestructura TI</h4>
                  <p className="text-gray-500 text-sm">Continuidad operativa garantizada</p>
                </div>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-brand-teal transition-colors group">
                 <h5 className="font-bold text-brand-dark text-lg mb-2 flex items-center gap-2"><Server size={18} className="text-brand-teal"/> Soporte Técnico Especializado</h5>
                 <p className="text-gray-600 text-sm leading-relaxed">No dejes que una falla detenga tu facturación. Ofrecemos mantenimiento preventivo y correctivo para computadores, servidores y redes locales. Resolvemos problemas antes de que ocurran.</p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-brand-teal transition-colors group">
                 <h5 className="font-bold text-brand-dark text-lg mb-2 flex items-center gap-2"><Shield size={18} className="text-brand-teal"/> Ciberseguridad & CCTV</h5>
                 <p className="text-gray-600 text-sm leading-relaxed">Protegemos tus datos y tus instalaciones. Implementación de firewalls, antivirus corporativos y sistemas de cámaras de vigilancia accesibles desde tu celular.</p>
              </div>
            </div>

            {/* Columna Marketing */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-brand-orange/10 rounded-2xl text-brand-orange">
                   <Megaphone size={40} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-brand-dark">Marketing Estratégico</h4>
                  <p className="text-gray-500 text-sm">Adquisición de clientes reales</p>
                </div>
              </div>

              <div className="bg-orange-50/50 p-6 rounded-2xl border border-orange-100 hover:border-brand-orange transition-colors group">
                 <h5 className="font-bold text-brand-dark text-lg mb-2 flex items-center gap-2"><TrendingUp size={18} className="text-brand-orange"/> Publicidad de Alto Rendimiento</h5>
                 <p className="text-gray-600 text-sm leading-relaxed">Gestión de campañas en Meta Ads (Facebook/Instagram) y Google Ads enfocadas en ROI. No buscamos "likes", buscamos clientes potenciales (Leads) listos para comprar.</p>
              </div>

              <div className="bg-orange-50/50 p-6 rounded-2xl border border-orange-100 hover:border-brand-orange transition-colors group">
                 <h5 className="font-bold text-brand-dark text-lg mb-2 flex items-center gap-2"><Monitor size={18} className="text-brand-orange"/> Desarrollo Web Conversivo</h5>
                 <p className="text-gray-600 text-sm leading-relaxed">Diseñamos Landing Pages como esta: rápidas, modernas y optimizadas para persuadir. Tu página web será tu mejor vendedor 24/7.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* NOSOTROS - REDACTADO PROFESIONALMENTE */}
      <section id="nosotros" className="py-24 bg-brand-dark text-white relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-brand-teal font-bold tracking-widest uppercase text-sm mb-6">Sobre Nosotros</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
            "Entendemos el código de las máquinas y el lenguaje de las personas."
          </h3>
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed text-justify md:text-center">
            <p>
              En un mercado saturado de agencias creativas que ignoran la técnica, y departamentos de sistemas que no entienden de ventas, <strong>A&M Tech nace para cerrar esa brecha.</strong>
            </p>
            <p>
              Somos una alianza estratégica entre profesional de TI y estratega digital en Cali. Creemos que la transformación digital real no es solo tener un Instagram bonito, sino contar con la infraestructura tecnológica que soporte ese crecimiento.
            </p>
            <p>
              Nuestro compromiso es simple: <strong>te damos la tranquilidad técnica</strong> para operar y las <strong>herramientas comerciales</strong> para vender. Sin intermediarios, sin excusas.
            </p>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-4">
             <div className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full">
                <CheckCircle2 className="text-brand-teal" size={20}/> <span>Atención Personalizada</span>
             </div>
             <div className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full">
                <CheckCircle2 className="text-brand-orange" size={20}/> <span>Enfoque en Resultados</span>
             </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-24 bg-brand-light relative">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden grid md:grid-cols-5">
            
            {/* Información de contacto visual */}
            <div className="md:col-span-2 bg-brand-dark p-10 text-white flex flex-col justify-between relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=2070&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
               <div className="relative z-10">
                 <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
                 <p className="text-gray-400 mb-8">Estamos listos para escuchar tu reto y proponerte una solución a medida.</p>
                 
                 <div className="space-y-6">
                   <div className="flex items-start gap-4">
                      <Smartphone className="text-brand-orange mt-1" />
                      <div>
                        <p className="font-bold text-sm text-gray-400 uppercase">WhatsApp / Celular</p>
                        <p className="text-lg">+57 300 190 3765</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-4">
                      <Monitor className="text-brand-teal mt-1" />
                      <div>
                        <p className="font-bold text-sm text-gray-400 uppercase">Email</p>
                        <p className="text-lg">aymtech0408@gmail.com</p>
                      </div>
                   </div>
                 </div>
               </div>
               
               <div className="relative z-10 mt-12">
                 <p className="text-sm text-gray-500">Cali, Valle del Cauca, CO</p>
               </div>
            </div>

            {/* Formulario */}
            <div className="md:col-span-3 p-10 lg:p-14">
              <h2 className="text-3xl font-bold text-brand-dark mb-8">Envíanos un mensaje</h2>
              <form action={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-dark ml-1">Tu Nombre</label>
                    <input required name="name" type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all" placeholder="Juan Pérez" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-dark ml-1">Teléfono / WhatsApp</label>
                    <input required name="phone" type="tel" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all" placeholder="+57 ..." />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-dark ml-1">Correo Electrónico</label>
                  <input required name="email" type="email" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all" placeholder="juan@empresa.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-dark ml-1">¿Qué necesitas?</label>
                  <select name="service" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all text-gray-600">
                    <option>Soporte TI / Infraestructura</option>
                    <option>Estrategia de Marketing / Ads</option>
                    <option>Desarrollo Web / App</option>
                    <option>Auditoría General</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-dark ml-1">Detalles del proyecto</label>
                  <textarea required name="message" rows={3} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition-all" placeholder="Cuéntanos un poco más..."></textarea>
                </div>

                <button type="submit" className="w-full bg-brand-dark hover:bg-black text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Enviar Solicitud
                </button>

                {formStatus && (
                  <div className={`p-4 rounded-xl text-center text-sm font-bold ${formStatus.includes('Gracias') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {formStatus}
                  </div>
                )}
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-12 px-4 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 opacity-80 grayscale hover:grayscale-0 transition-all">
             <div className="relative w-24 h-8">
                 <Image src="/logo.jpg" alt="A&M Logo Footer" fill className="object-contain" />
             </div>
          </div>
          <p className="text-gray-400 text-sm font-medium">
            © {new Date().getFullYear()} A&M Tech. Todos los derechos reservados.
          </p>
        </div>
      </footer>

      {/* WHATSAPP BUTTON */}
      <a 
        href="https://wa.me/573001903765" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20bd5a] transition-all hover:scale-110 z-50 group"
      >
        <Smartphone size={28} className="fill-current" />
      </a>
    </main>
  );
}
