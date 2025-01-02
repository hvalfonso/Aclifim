interface Info {
    id: number;
    title: string;
    description: string;
    image: string;
}

export default function MainHome () {

  // Info 
    const Info: Info[] = [
        {
            id: 1,
            title: "Marcha del 1ero de Mayo",
            description: "En el contexto del Primero de Mayo, Día Internacional de los Trabajadores, la ACLIFIM suele desempeñar un papel destacado en las actividades conmemorativas. Sus integrantes a menudo participan en los desfiles y celebraciones, destacando su capacidad de superación y su compromiso con la construcción de una sociedad inclusiva. Además, es un momento para visibilizar sus demandas, logros y contribuciones al desarrollo social, así como para reafirmar la importancia de la igualdad de derechos y oportunidades para todos los ciudadanos.",
            image: "https://th.bing.com/th/id/OIP.gwUvF7-uk2bVIyWgi2w3QAAAAA?rs=1&pid=ImgDetMain",
        },
        
        {
            id: 2,
            title: "Aclifim en Granma Festival de teatro y danza",
            description: "El amor a la vida  hizo acto de presencia, hoy, en la X edición del Festival provincial de teatro y danza de la Asociación Cubana de Limitados Físico- Motores (Aclifim), celebrado en la casa de la cultura 20 de Octubre, de Bayamo. Los 44 participantes, de los municipios de Bayamo, Yara, Manzanillo y Niquero derrocharon talento y alegría en el escenario.",
            image: "https://th.bing.com/th/id/R.1a829b8e74ccb34619c92119d4aa8875?rik=jSn7qCrqN5eD4Q&riu=http%3a%2f%2flademajagua.cu%2fwp-content%2fuploads%2f2018%2f10%2fFestival-de-la-Aclifim-en-Granma.jpg&ehk=GUQ1BankeXZKm0tdkjFiysP3Mk8RcpJEXCWp38GEwHk%3d&risl=&pid=ImgRaw&r=0",
        },
        
        {
            id: 3,
            title: "Storyboard Animation",
            description: "Short film animation sequence",
            image: "https://th.bing.com/th/id/OIP.FY-pumqPuuXVrQitfdO94wHaDo?w=708&h=348&rs=1&pid=ImgDetMain",
        },

        {
            id: 4,
            title: "Asamblea de Balance Anual ACLIFIM en Cienfuegos",
            description: "La ACLIFIM en Cienfuegos realizó su Asamblea de Balance anual, evaluando su gestión en 2022. De los 16 acuerdos planteados, siete fueron cumplidos y nueve, parcialmente. Las principales problemáticas destacadas incluyen el mal estado de las sedes municipales, el incumplimiento en la entrega de sillas de ruedas y la necesidad de integrar más a los jóvenes con discapacidad en la sociedad. También se subrayó la importancia de superar el asistencialismo y garantizar derechos plenos a las personas con discapacidades. El evento contó con la participación de autoridades provinciales, organismos y representantes de sus 3,751 afiliados.",
            image: "https://www.rcm.cu/wp-content/uploads/2023/02/331307134_3391593791112630_2715139654442349268_n.jpg",
        },

        {
            id: 5,
            title: "Asamblea de Balance Anual ACLIFIM en Cienfuegos",
            description: "La ACLIFIM en Cienfuegos realizó su Asamblea de Balance anual, evaluando su gestión en 2022. De los 16 acuerdos planteados, siete fueron cumplidos y nueve, parcialmente. Las principales problemáticas destacadas incluyen el mal estado de las sedes municipales, el incumplimiento en la entrega de sillas de ruedas y la necesidad de integrar más a los jóvenes con discapacidad en la sociedad. También se subrayó la importancia de superar el asistencialismo y garantizar derechos plenos a las personas con discapacidades. El evento contó con la participación de autoridades provinciales, organismos y representantes de sus 3,751 afiliados.",
            image: "https://www.rcm.cu/wp-content/uploads/2023/02/331307134_3391593791112630_2715139654442349268_n.jpg",
        },
        
        {
            id: 6,
            title: "Asamblea de Balance Anual ACLIFIM en Cienfuegos",
            description: "La ACLIFIM en Cienfuegos realizó su Asamblea de Balance anual, evaluando su gestión en 2022. De los 16 acuerdos planteados, siete fueron cumplidos y nueve, parcialmente. Las principales problemáticas destacadas incluyen el mal estado de las sedes municipales, el incumplimiento en la entrega de sillas de ruedas y la necesidad de integrar más a los jóvenes con discapacidad en la sociedad. También se subrayó la importancia de superar el asistencialismo y garantizar derechos plenos a las personas con discapacidades. El evento contó con la participación de autoridades provinciales, organismos y representantes de sus 3,751 afiliados.",
            image: "https://th.bing.com/th/id/R.55c2d459e8dddfa858885c8a1260fd42?rik=w0kb6yBeVtK6Ag&riu=http%3a%2f%2flademajagua.cu%2fwp-content%2fuploads%2f2017%2f02%2fAclifim-pesas-Granma.jpg&ehk=hFvIQm5EVj6Sw6uqw0n19hLfwT3OubB5muuMlXItCG4%3d&risl=&pid=ImgRaw&r=0",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl font-bold mb-8 text-gray-800">Sobre nosotros</h2>
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <p className="text-gray-600 leading-relaxed mb-6">
                        Asociación Cubana de Personas con Discapacidad Físico–Motora (ACLIFIM).
                        Se fundó con el nombre de Asociación Cubana de Limitados Físico Motores y actualmente, 
                        se denomina Asociación Cubana de Personas con Discapacidad Físico–Motora. 
                        Es una asociación sin fines de lucro, con personalidad jurídica propia; 
                        fundada el 14 de marzo de 1980, por un grupo de personas con discapacidad físico - motora 
                        y está reconocida oficialmente como Asociación por el Ministerio de Justicia de la República de Cuba.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-6">
                        Su lema es <span className="font-bold text-gray-800">"Por la Diversidad, la Inclusión y la Participación Efectiva."</span> 
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                        Las limitaciones físico-motoras constituyen una de las principales discapacidades que afectan a la población mundial. 
                        En Cuba el estudio psicosocial de las personas con discapacidad, realizado en todo el territorio nacional en el año 2003,
                        por orientación del Comandante en Jefe Fidel Castro, 
                        reveló que las limitaciones físico-motoras ocupan el segundo lugar entre todas las discapacidades, 
                        superada solamente por los portadores deficientes intelectuales (retraso mental).
                        </p>
                    </div>
                </div>
            </section>

        {/* Info de aclifim */}
            <section className="py-16 px-4 bg-gray-100">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl font-bold mb-8 text-gray-800">Nuestra historia</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Info.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105">
                            <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-48 object-cover"
                            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                                const target = e.target as HTMLImageElement;
                                target.src =
                                "../../assets/img/aclifim3.jpg";
                            }}
                            />
                            <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-gray-800">
                                {item.title}
                            </h3>
                            <p className="text-gray-600">{item.description}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>
    </div>
    )
};