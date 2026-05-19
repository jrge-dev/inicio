export default function Expertise() {
  const data = [
    {
      fecha: "Abril 2025 - Noviembre 2025",
      titulo: "Docente área tecnología",
      lugar: "Liceo Bicentenario Excelencia Polivalente San Nicolás",
      tags: ["GDScript", "Arduino", "IA"],
      descripcion: [
        "Enseñanza de programación y creación de videojuegos a nivel inicial.",
        "Diseño e implementación de talleres prácticos para estudiantes de enseñanza media.",
        "Capacitaciones a docentes sobre el uso de herramientas de inteligencia artificial.",
      ],
    },
    {
      fecha: "Septiembre 2024 - Diciembre 2024",
      titulo: "Soporte TI",
      lugar: "DAEM de Portezuelo",
      tags: ["Hardware", "Redes", "Gestión Web"],
      descripcion: [
        "Resolución de incidentes técnicos en escuelas y oficinas del DAEM.",
        "Mantenimiento y optimización de equipos informáticos.",
        "Actualización de contenidos en la web institucional.",
      ],
    },
    {
      fecha: "Septiembre 2023 - Noviembre 2023",
      titulo: "Desarrollador de software (practicante)",
      lugar: "Liceo Bicentenario Excelencia Polivalente San Nicolás",
      tags: ["RaspberryPi", "IOT", "backend", "Frontend"],
      descripcion: [
        "Desarrollo de de MVP para sistema de gestión de ingresos institucional.",
        "Implementación de lógica de negocio y endpoints utilizando Python y Flask.",
        "Automatización de carga y persistencia de datos integrando Google Sheets API.",
      ],
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto py-12">
      <div className="space-y-0">
        {data.map((item, i) => (
          <div
            key={i}
            className="group relative flex flex-col md:flex-row gap-4 md:gap-12 pb-12 last:pb-0"
          >
            <div className="md:w-1/3 flex flex-col md:items-end text-left md:text-right">
              <span className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-1">
                {item.fecha}
              </span>
              <h4 className="text-sm font-medium text-slate-500 max-w-[200px] md:ml-auto">
                {item.lugar}
              </h4>

              <div className="flex flex-wrap gap-2 mt-4 md:justify-end">
                {item.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-1 bg-slate-100 text-slate-500 rounded-md font-bold uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="hidden md:flex flex-col items-center">
              <div
                className={`w-4 h-4 rounded-full border-4 border-slate-50 z-10 ${i === 0 ? "bg-blue-600" : "bg-slate-300"}`}
              />
              <div className="w-0.5 h-full bg-slate-200" />
            </div>
            <div className="flex-1 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm group-hover:border-blue-100 transition-colors">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {item.titulo}
              </h3>
              <ul className="grid grid-cols-1 gap-3">
                {item.descripcion.map((line, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-slate-600 text-sm leading-relaxed"
                  >
                    <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-blue-500/40 rounded-full flex-shrink-0" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
