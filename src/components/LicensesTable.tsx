export function LicensesTable() {
  const licenses = [
    {
      no: "L1",
      english: "License for carrying out repair, construction, and installation works using industrial mountaineering methods at heights",
      russian: "Лицензия на осуществление ремонтных, строительных и монтажных работ с использованием методов промышленного альпинизма на высоте",
      chinese: "使用工业登山方法在高处进行维修、建筑和安装工作的许可证",
      uzbek: "Balandliklarda sanoat alpinizmi usullarida ta'mirlash, qurilish-montaj ishlarini bajarish faoliyatini litsenziyalash"
    },
    {
      no: "L2",
      english: "License for carrying out design, construction, and repair of bridges and tunnels",
      russian: "Лицензия на осуществление проектирования, строительства и ремонта мостов и тоннелей",
      chinese: "桥梁和隧道设计、建设和维修许可证",
      uzbek: "Ko'priklar va tunnellarni loyihalashtirish, qurish va ularni ta'mirlash faoliyatini litsenziyalash"
    },
    {
      no: "L3",
      english: "License for carrying out design, construction, and operation of high-risk facilities and potentially hazardous productions",
      russian: "Лицензия на осуществление проектирования, строительства и эксплуатации объектов повышенной опасности и потенциально опасных производств",
      chinese: "高风险设施和潜在危险生产的设计、建设和运营许可证",
      uzbek: "Xavfi yuqori bo'lgan obyektlarni va potensial xavfli ishlab chiqarishlarni loyihalashtirish, qurish hamda ulardan foydalanish bo'yicha faoliyatni litsenziyalash"
    },
    {
      no: "L4",
      english: "License for carrying out development of architectural and urban planning documentation",
      russian: "Лицензия на осуществление разработки архитектурно-градостроительной документации",
      chinese: "建筑和城市规划文件编制许可证",
      uzbek: "Arxitektura-shaharsozlik hujjatlarini ishlab chiqish faoliyatini litsenziyalash"
    },
    {
      no: "L5",
      english: "License for carrying out design, construction, operation, and repair of main gas pipelines, oil pipelines, and oil product pipelines",
      russian: "Лицензия на осуществление проектирования, строительства, эксплуатации и ремонта магистральных газопроводов, нефтепроводов и нефтепродуктопроводов",
      chinese: "主要天然气管道、石油管道和石油产品管道的设计、建设、运营和维修许可证",
      uzbek: "Magistral gaz quvurlari, neft quvurlari va neft mahsulotlari quvurlarini loyihalashtirish, qurish, ulardan foydalanish hamda ularni ta'mirlash faoliyatini litsenziyalash"
    }
  ];

  const permits = [
    {
      no: "P1",
      english: "Permit granting the right to carry out labor activity in the territory of the Republic of Uzbekistan (Work Permit)",
      russian: "Свидетельство, предоставляющее право осуществлять трудовую деятельность на территории Республики Узбекистан",
      chinese: "乌兹别克斯坦共和国境内劳动活动权利许可证（工作许可证）",
      uzbek: "O'zbekiston Respublikasi hududida mehnat faoliyati amalga oshirish huquqini beruvchi guvohnoma"
    },
    {
      no: "P2",
      english: "Permit for installation, repair, and commissioning of explosion-hazardous new technological processes and equipment, amusement park attractions, as well as for the use of technical devices applied at hazardous production facilities,
      russian: "Разрешение на монтаж, ремонт и ввод в эксплуатацию взрывоопасных новых технологических процессов и оборудования, аттракционов парков отдыха, а также на использование технических устройств, применяемых на опасных производственных объектах",
      chinese: "进行易爆新技术工艺和设备、游乐园游乐设施的安装、维修和调试，以及在危险生产设施中使用技术装置的许可",
      uzbek: "Portlash xavfi bo‘lgan texnologik yangi jarayonlar va asbob-uskunalarni, istirohat bog‘lari attraksionlarini montaj qilish, ta’mirlash va ishga tushirish, shuningdek, xavfli ishlab chiqarish obyektlarida qo‘llaniladigan texnik qurilmalardan foydalanish uchun ruxsatnoma"
    },
    {
      no: "P3",
      english: "Permit for carrying out adjustment works or inspection of the temperature regime Supervision of the Mining Industry and Registration of the State Commission on Industrial Safety and Mining under the Ministry of Employment and Labor Relations and Nuclear Safety under the Cabinet of Ministers",
      russian: "Разрешение на выполнение работ по регулированию температурного режима Надзор горной промышленности и регистрация Государственной комиссией по промышленной безопасности и горному делу при Министерстве занятости и трудовых отношений и ядерной безопасности при Кабинете Министров",
      chinese: "温度调节工作或检查许可证 - 采矿业监督和在部长内阁下的就业和劳动关系部以及核安全部下的国家工业安全和采矿委员会注册",
      uzbek: "Ung-Jon asoratti va geologiya vazifasi Komissiyasi Tog' kon asoratti va geologiya adasini nazorati qilish boshqarasiga Ko Vazirlar Mahkamasi huzuridagi Sanoat xavfsizligi va tog' kon ishi bo'yicha davlat kommissiyasida ro'yxatdan o'tkazish bo'yicha nazoratchilik oferyatsiyalar uchun qadimsandigi adasini ishlovchi beyani va uchun ruxsatnoma"
    },
    {
      no: "P4",
      english: "Permit to inspect and sort individual devices and facilities such as a blast-proof protection facility",
      russian: "Разрешение на проведение осмотра и последующую сортировку устройств и сооружений, применяемых на опасных производственных объектах",
      chinese: "检查和分类危险生产设施中使用的设备和结构（如防爆保护设施）的许可证",
      uzbek: "Xavfli ishlab chiqarish oferyatsiya qo'llaniladigan tashkil qatrimsandigi va ishonchli va tilakda, una ruxsatnoma"
    },
    {
      no: "P5",
      english: "Permit to carry out non-destructive inspection works at hazardous production facilities and dangerous sites/structures",
      russian: "Разрешение на выполнение неразрушающего контроля на опасных производственных объектах и опасных сооружениях (терминал опасных объектов)",
      chinese: "在危险生产设施和危险场所/结构进行无损检测工作的许可证",
      uzbek: "Xavfli ishlab chiqarish oferyatlari va va xavfli korxona huzilatilarida parani buzmasdan tekshirish ishlarini olib borish uchun ruxsatnoma"
    },
    {
      no: "P6",
      english: "Conclusion on the availability of containers for transporting dangerous goods",
      russian: "Заключение о пригодности контейнера для перевозки опасных грузов",
      chinese: "危险货物运输集装箱适用性结论",
      uzbek: "Xavfli yuklarni tashish uchun va teg'istartiagi xulosasi"
    },
    {
      no: "P7",
      english: "Permit for installation, repair, commissioning, and operation of gas pipelines and CNG gas stations",
      russian: "Разрешение на монтаж, текущий ремонт, ввод в эксплуатацию и эксплуатацию газопроводов и других газонаполнительных станций (газовых заправок)",
      chinese: "天然气管道和压缩天然气加气站的安装、维修、调试和运营许可证",
      uzbek: "Gaz qurilumalari va gaz to'ldirish stansiyalarini qo'yish, joriy ta'mirlash, ishga tushirish va foydalanish uchun ruxsatnoma"
    },
    {
      no: "P8",
      english: "Permit to carry out chemical profession works (agricultural, paint, etc.) and other coatings",
      russian: "Разрешение на выполнение работ по защите от коррозии, очистки, окраски, трубопроводами, цистерен и других ёмкостей",
      chinese: "进行管道、储罐和其他容器的防腐、清洁、涂漆工作的许可证",
      uzbek: "Ishlamlar, quvurlar, sisternа va boshqa sig'imlari himoyalash korroziyadan hajrdash uchun ruxsatnoma"
    },
    {
      no: "P9",
      english: "Permit to use X-ray equipment",
      russian: "Разрешение на использование рентгеновского оборудования",
      chinese: "使用X射线设备许可证",
      uzbek: "Rentgen uskunasidan foydalanish uchun ruxsatnoma"
    }
  ];

  const certificates = [
    {
      no: "C1",
      english: "Certificate of accreditation or conformity of a non-destructive testing laboratory in the relevant field",
      russian: "Свидетельство об аккредитации или соответствии лабораторий неразрушающего контроля в соответствующей области",
      chinese: "相关领域无损检测实验室的认证或合格证书",
      uzbek: "Putur yetkazmaydigan nazorat laboratoriyasining tanligli soha bo'yicha akkreditatsiya yoki muvofiqliği to'g'risidagi guvohnoma"
    },
    {
      no: "C2",
      english: "Certificate of state calibration of equipment and measuring instruments used for non-destructive testing",
      russian: "Свидетельство о государственной поверке оборудования и измерительных приборов, используемых для неразрушающего контроля",
      chinese: "用于无损检测的设备和测量仪器的国家校准证书",
      uzbek: "Putur yetkazmaydigan nazoratni amalga oshiruvchi asbob-uskunalar, o'lchov asboblarining davlat qiyoslovidan o'tkazilgani to'g'risida guvohnoma"
    },
    {
      no: "C3",
      english: "Qualification certificate of personnel performing non-destructive testing",
      russian: "Квалификационный сертификат персонала, осуществляющего неразрушающий контроль",
      chinese: "进行无损检测的人员资格证书",
      uzbek: "Putur yetkazmaydigan nazoratini amalga oshiruvchi xodimlarning malaka sertifikati"
    },
    {
      no: "C4",
      english: "Certificate of completion of training in industrial safety",
      russian: "Сертификат о завершении обучения по промышленной безопасности",
      chinese: "工业安全培训完成证书",
      uzbek: "Sanoat xavfsizligi bo'yicha o'qishni tamomlаganliği to'g'risida sertifikat"
    },
    {
      no: "C5",
      english: "Certificate of advanced training in the field of ecology",
      russian: "Сертификат о повышении квалификации в области экологии",
      chinese: "生态学领域高级培训证书",
      uzbek: "Ekologiya sohasida malaka oshirganliği to'g'risida sertifikat"
    },
    {
      no: "C6",
      english: "Specialist certificate of the Ministry of Construction",
      russian: "Сертификат специалиста Министерства строительства",
      chinese: "建设部专家证书",
      uzbek: "Qurilish vazirligi mutaxassislik sertifikati"
    }
  ];

  const TableSection = ({ 
    title, 
    data, 
    bgColor 
  }: { 
    title: string; 
    data: typeof licenses;
    bgColor: string;
  }) => (
    <div className="mb-12">
      <h3 className="text-black mb-4 text-center">{title}</h3>
      
      {/* Desktop Table View - hidden on mobile */}
      <div className="overflow-x-auto hidden md:block">
        <table className="w-full border-collapse table-fixed">
          <thead>
            <tr className={bgColor}>
              <th className="border border-gray-300 px-4 py-3 text-left text-white" style={{ width: '5%' }}>No.</th>
              <th className="border border-gray-300 px-4 py-3 text-left text-white" style={{ width: '23.75%' }}>English</th>
              <th className="border border-gray-300 px-4 py-3 text-left text-white" style={{ width: '23.75%' }}>Русский</th>
              <th className="border border-gray-300 px-4 py-3 text-left text-white" style={{ width: '23.75%' }}>中文</th>
              <th className="border border-gray-300 px-4 py-3 text-left text-white" style={{ width: '23.75%' }}>O'zbek</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="border border-gray-300 px-4 py-3 text-center">{item.no}</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">{item.english}</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">{item.russian}</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">{item.chinese}</td>
                <td className="border border-gray-300 px-4 py-3 text-gray-700">{item.uzbek}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View - shown only on mobile */}
      <div className="md:hidden space-y-4">
        {data.map((item, index) => (
          <div key={index} className="border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm">
            <div className={`${bgColor} px-4 py-2 text-white`}>
              <span>{item.no}</span>
            </div>
            <div className="p-4 space-y-3">
              <div>
                <div className="text-gray-500 text-sm mb-1">English</div>
                <div className="text-gray-700">{item.english}</div>
              </div>
              <div>
                <div className="text-gray-500 text-sm mb-1">Русский</div>
                <div className="text-gray-700">{item.russian}</div>
              </div>
              <div>
                <div className="text-gray-500 text-sm mb-1">中文</div>
                <div className="text-gray-700">{item.chinese}</div>
              </div>
              <div>
                <div className="text-gray-500 text-sm mb-1">O'zbek</div>
                <div className="text-gray-700">{item.uzbek}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="licenses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-black mb-4">Licenses, Permits & Certifications</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Comprehensive list of licenses, permits, and certifications that INPUT can help your business obtain.
          </p>
        </div>

        <TableSection title="Licenses" data={licenses} bgColor="bg-gray-700" />
        {permits.length > 0 && <TableSection title="Permits" data={permits} bgColor="bg-gray-700" />}
        {certificates.length > 0 && <TableSection title="Certificates" data={certificates} bgColor="bg-gray-700" />}
      </div>
    </section>
  );
}
