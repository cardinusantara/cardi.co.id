export interface SolutionItem {
  slug: string;
  category: 'industri' | 'role' | 'fitur' | 'integrasi';
  icon: string;
  title: Record<string, string>;
  desc: Record<string, string>;
  heroSub?: Record<string, string>;
  badge?: Record<string, string>;
  benefits: Record<string, string[]>;
  metrics?: { label: Record<string, string>; val: string }[];
}

export const solutionsData: SolutionItem[] = [
  // --- INDUSTRI ---
  {
    slug: 'haji-umroh',
    category: 'industri',
    icon: 'travel',
    title: {
      id: 'Haji & Umroh',
      en: 'Hajj & Umrah Travel',
      zh: '朝觐与副朝朝圣'
    },
    desc: {
      id: 'Kelola data jamaah, follow-up otomatis, dan broadcast paket keberangkatan via WhatsApp 24/7.',
      en: 'Manage pilgrim data, automated follow-ups, and broadcast departure packages via WhatsApp 24/7.',
      zh: '全天候管理朝圣者数据、自动跟进并通过 WhatsApp 群发行程套餐。'
    },
    badge: {
      id: 'SOLUSI INDUSTRI TRAVEL',
      en: 'TRAVEL INDUSTRY SOLUTION',
      zh: '旅游行业解决方案'
    },
    heroSub: {
      id: 'Otomatiskan pendaftaran jamaah, verifikasi dokumen paspor, hingga pembayaran DP paket haji & umroh secara otomatis via WhatsApp.',
      en: 'Automate pilgrim registration, passport document verification, and down payment tracking via WhatsApp.',
      zh: '通过 WhatsApp 自动办理朝圣者登记、护照文件核验及首款支付追踪。'
    },
    benefits: {
      id: [
        'Broadcast jadwal manasik dan keberangkatan otomatis ke ribuan jamaah.',
        'Asisten AI membalas pertanyaan rincian paket umroh & hotel 24 jam non-stop.',
        'Integrasi sistem pembayaran DP & pelunasan otomatis terverifikasi.'
      ],
      en: [
        'Automated broadcast of orientation schedules and departure updates to thousands of pilgrims.',
        'AI assistant answers package details, hotel tiers, and requirements 24/7.',
        'Verified down payment and installment payment integration.'
      ],
      zh: [
        '自动向数千名朝圣者群发行前培训与出发通知。',
        'AI 助手 24/7 解答套餐细节、酒店星级及相关要求。',
        '集成经验证的首款及分期付款系统。'
      ]
    },
    metrics: [
      { label: { id: 'Respon Pertanyaan', en: 'Response Speed', zh: '响应速度' }, val: '< 3 Detik' },
      { label: { id: 'Konversi Jamaah', en: 'Conversion Rate', zh: '转化率提升' }, val: '+64%' },
      { label: { id: 'Hemat Jam Kerja', en: 'Hours Saved', zh: '节省工时' }, val: '120h/bln' }
    ]
  },
  {
    slug: 'klinik-kecantikan',
    category: 'industri',
    icon: 'sparkle',
    title: {
      id: 'Klinik Kecantikan & Spa',
      en: 'Beauty Clinic & Spa',
      zh: '医美诊所与水疗'
    },
    desc: {
      id: 'Booking online treatment, reminder jadwal konsultasi dokter, dan program loyalitas pelanggan otomatis.',
      en: 'Online treatment booking, doctor appointment reminders, and automated loyalty programs.',
      zh: '在线护理预约、医生就诊提醒及全自动会员忠诚度计划。'
    },
    badge: {
      id: 'SOLUSI KLINIK & BEAUTY',
      en: 'BEAUTY CLINIC SOLUTION',
      zh: '医美诊所解决方案'
    },
    heroSub: {
      id: 'Cegah pasien no-show dengan reminder otomatis WhatsApp, kelola slot jam dokter, dan dorong repeat treatment tanpa admin manual.',
      en: 'Prevent patient no-shows with automated WhatsApp reminders, manage doctor slots, and drive repeat treatments.',
      zh: '通过 WhatsApp 自动提醒防止患者缺席，智能管理医生预约时段并促进二次消费。'
    },
    benefits: {
      id: [
        'Sistem reservasi treatment otomatis langsung tersinkronkan dengan kalender dokter.',
        'Pengingat H-1 jadwal perawatan via WhatsApp untuk menekan no-show hingga 90%.',
        'Follow-up pasca-treatment dan rujukan konsultasi lanjutan otomatis.'
      ],
      en: [
        'Automated treatment reservation directly synced with doctor calendar.',
        'H-1 automated WhatsApp treatment reminders reducing no-shows by 90%.',
        'Post-treatment follow-up and automated skincare consultation triggers.'
      ],
      zh: [
        '自动护理预约与医生日历实时同步。',
        '提前1天自动发送 WhatsApp 护理提醒，降低90%缺席率。',
        '术后跟进及自动护肤咨询触发。'
      ]
    },
    metrics: [
      { label: { id: 'Pengurangan No-Show', en: 'No-Show Reduction', zh: '缺席率降低' }, val: '90%' },
      { label: { id: 'Repeat Treatment', en: 'Repeat Treatment Rate', zh: '复购率提升' }, val: '+45%' },
      { label: { id: 'Slot Tersisi', en: 'Filled Slots', zh: '预约满载率' }, val: '98%' }
    ]
  },
  {
    slug: 'sekolah-pendidikan',
    category: 'industri',
    icon: 'education',
    title: {
      id: 'Sekolah & Pendidikan',
      en: 'Schools & Education',
      zh: '学校与教育机构'
    },
    desc: {
      id: 'PMB (Penerimaan Siswa Baru) otomatis, update pengumuman orang tua, dan broadcast SPP via WA.',
      en: 'Automated admissions (PMB), parent announcements, and tuition payment broadcasts.',
      zh: '全自动招生录取、家长通知推送及学费催缴群发。'
    },
    badge: {
      id: 'SOLUSI EDUTECH & SEKOLAH',
      en: 'EDUCATION & SCHOOL SOLUTION',
      zh: '教育与学校解决方案'
    },
    heroSub: {
      id: 'Tingkatkan jumlah pendaftar siswa baru dengan AI bot pendaftaran, kirim tagihan SPP otomatis, dan kelompokkan pesan wali murid.',
      en: 'Boost new student admissions with AI registration bots, automated tuition billing, and parent communication channels.',
      zh: '通过 AI 报名机器人提升新生录取量，自动化学费账单推送及家校沟通。'
    },
    benefits: {
      id: [
        'Formulir pendaftaran calon siswa terintegrasi bot WhatsApp 24 jam.',
        'Kirim rincian tagihan SPP dan konfirmasi pembayaran terverifikasi instan.',
        'Broadcast pengumuman sekolah dan kegiatan ekstrakurikuler tepat sasaran.'
      ],
      en: [
        'Student application forms integrated with 24/7 WhatsApp bots.',
        'Automated tuition bill dispatches and instant verified payment receipts.',
        'Targeted school announcements and extracurricular activity updates.'
      ],
      zh: [
        '新生入学申请表与 24/7 WhatsApp 机器人无缝集成。',
        '全自动学费账单发送与即时已验证付款回执。',
        '精准推送学校公告及课外活动通知。'
      ]
    },
    metrics: [
      { label: { id: 'Kenaikan Pendaftaran', en: 'Admissions Growth', zh: '招生增长率' }, val: '+52%' },
      { label: { id: 'Ketepatan Bayar SPP', en: 'On-time Tuition', zh: '按时缴费率' }, val: '94%' },
      { label: { id: 'Waktu Balas Wali', en: 'Parent Inquiry Time', zh: '家长咨询响应' }, val: '2 Detik' }
    ]
  },
  {
    slug: 'udd-pmi',
    category: 'industri',
    icon: 'health',
    title: {
      id: 'UDD PMI & Kesehatan',
      en: 'Healthcare & Blood Bank',
      zh: '医疗与血站中心'
    },
    desc: {
      id: 'Reminder donor darah rutin, edukasi pasien, dan koordinasi rujukan antar unit layanan kesehatan.',
      en: 'Routine blood donor reminders, patient education, and health unit referral coordination.',
      zh: '定期献血提醒、患者健康科普及医疗单位转诊协调。'
    },
    badge: {
      id: 'SOLUSI LAYANAN KESEHATAN',
      en: 'HEALTHCARE & CLINICAL SOLUTION',
      zh: '医疗健康解决方案'
    },
    heroSub: {
      id: 'Kelola database pendonor darah, pengingat interval 3 bulan donor otomatis, dan tanggap darurat kebutuhan gol darah kritis.',
      en: 'Manage blood donor databases, 3-month donor interval reminders, and urgent blood group alert broadcasts.',
      zh: '管理献血者数据库、3个月定期献血自动提醒及紧急稀有血型呼吁。'
    },
    benefits: {
      id: [
        'Reminder otomatis setelah 75 hari pasca-donor untuk jadwal donor berikutnya.',
        'Broadcast panggilan darurat stok darah ke pendonor sesuai golongan darah.',
        'Layanan informasi lokasi donor darah & cek stok darah via bot WhatsApp.'
      ],
      en: [
        'Automated 75-day post-donation reminders for upcoming donor eligibility.',
        'Emergency blood shortage alert broadcasts matched by blood group.',
        'Blood stock checker and mobile donor drive locator via WhatsApp bot.'
      ],
      zh: [
        '献血75天后自动发送下一次合规献血提醒。',
        '根据血型精准推送紧急缺血呼吁。',
        '通过 WhatsApp 机器人查询实时血液库存与献血点。'
      ]
    },
    metrics: [
      { label: { id: 'Retensi Pendonor', en: 'Donor Retention', zh: '献血者留存率' }, val: '+78%' },
      { label: { id: 'Kecepatan Tanggap Stock', en: 'Emergency Speed', zh: '紧急响应速度' }, val: '5 Menit' },
      { label: { id: 'Partisipasi Donor', en: 'Donor Participation', zh: '献血参与度' }, val: '+60%' }
    ]
  },
  {
    slug: 'provider-wifi',
    category: 'industri',
    icon: 'wifi',
    title: {
      id: 'Provider WiFi & ISP',
      en: 'Home WiFi & ISP',
      zh: '宽带网络与 ISP'
    },
    desc: {
      id: 'Tiket gangguan otomatis, notifikasi jatuh tempo tagihan internet, dan retensi langganan pelanggan.',
      en: 'Automated trouble ticketing, bill due date notifications, and subscriber retention.',
      zh: '自动故障工单、网络月租到期提醒及用户留存维系。'
    },
    badge: {
      id: 'SOLUSI TELEKOMUNIKASI & ISP',
      en: 'TELECOM & ISP SOLUTION',
      zh: '电信与宽带解决方案'
    },
    heroSub: {
      id: 'Kurangi beban call center dengan bot ticketing gangguan otomatis, sistem isolir bayar, dan pengingat tagihan jatuh tempo.',
      en: 'Offload call center traffic with automated trouble ticketing, payment reminders, and outage status notifications.',
      zh: '通过全自动故障工单、缴费提醒及断网状态通知减轻呼叫中心压力。'
    },
    benefits: {
      id: [
        'Otomatisasi pemuatan tiket pengaduan jaringan lengkap dengan nomor tiket.',
        'Notifikasi pengingat pembayaran bulanan disertai link payment gateway otomatis.',
        'Update status perbaikan jaringan massal ke pelanggan terdampak.'
      ],
      en: [
        'Automated network issue ticketing with generated tracking IDs.',
        'Monthly billing reminder dispatches containing direct payment links.',
        'Bulk status updates broadcast to customers affected by area maintenance.'
      ],
      zh: [
        '自动创建网络故障工单并生成追踪编号。',
        '月度账单提醒发送，附带直接支付链接。',
        '向受区域维护影响的客户批量推送修复进度。'
      ]
    },
    metrics: [
      { label: { id: 'Penurunan Call Center', en: 'Call Center Offload', zh: '呼叫中心减负' }, val: '65%' },
      { label: { id: 'Ketepatan Bayar Bill', en: 'On-time Payments', zh: '按时缴费率' }, val: '92%' },
      { label: { id: 'Resolusi Tiket', en: 'Ticket Resolution Time', zh: '工点解决速度' }, val: '2x Lebih Cepat' }
    ]
  },
  {
    slug: 'dealer-mobil',
    category: 'industri',
    icon: 'car',
    title: {
      id: 'Dealer Mobil & Otomotif',
      en: 'Car Dealership & Automotive',
      zh: '汽车 4S 店与 Automotive'
    },
    desc: {
      id: 'Manajemen lead showroom, follow-up jadwal test drive, dan broadcast promo mobil baru via WhatsApp.',
      en: 'Showroom lead management, test drive booking follow-ups, and new car promo broadcasts.',
      zh: '展厅潜在客户管理、试驾预约跟进及新车优惠群发。'
    },
    badge: {
      id: 'SOLUSI AUTOMOTIVE & DEALER',
      en: 'AUTOMOTIVE & DEALERSHIP SOLUTION',
      zh: '汽车经销解决方案'
    },
    heroSub: {
      id: 'Tangkap lead prospek pembelian mobil dari Facebook Ads & Walk-in showroom, jadwalkan test drive, dan ingatkan jadwal servis berkala.',
      en: 'Capture car buyer leads from Facebook Ads & showroom walk-ins, schedule test drives, and automate periodic service reminders.',
      zh: '捕获来自广告与展厅的购车意向，预约试驾并自动提醒定期保养。'
    },
    benefits: {
      id: [
        'Lead masuk dari iklan digital langsung dialokasikan ke sales rep yang available.',
        'Konfirmasi otomatis jadwal test drive beserta pilihan model mobil & lokasi showroom.',
        'Pengingat otomatis jadwal perawatan berkala (5.000 KM & 10.000 KM).'
      ],
      en: [
        'Incoming digital ad leads instantly routed to available sales representatives.',
        'Automated test drive booking confirmations with model options & location pin.',
        'Periodic maintenance reminders at 5,000 KM & 10,000 KM milestones.'
      ],
      zh: [
        '来自线上广告的线索即时分配给在线销售顾问。',
        '自动确认试驾预约，包含车型选择与展厅定位。',
        '在 5,000 公里及 10,000 公里里程节点自动提醒保养。'
      ]
    },
    metrics: [
      { label: { id: 'Booking Test Drive', en: 'Test Drive Bookings', zh: '试驾预约量' }, val: '+85%' },
      { label: { id: 'Respon Sales Lead', en: 'Lead Response Time', zh: '线索响应时间' }, val: '< 5 Detik' },
      { label: { id: 'Penjualan Unit', en: 'Unit Sales Lift', zh: '销量提升' }, val: '+38%' }
    ]
  },

  // --- ROLE ---
  {
    slug: 'founder-ceo',
    category: 'role',
    icon: 'crown',
    title: {
      id: 'Founder & CEO',
      en: 'Founder & CEO',
      zh: '创始人与 CEO'
    },
    desc: {
      id: 'Pantau kesehatan bisnis, laporan performa otomatis ke WhatsApp executive group, dan siap audit IPO.',
      en: 'Monitor business health, automated executive WhatsApp performance digests, and IPO audit readiness.',
      zh: '监控企业健康状况、自动推送高管 WhatsApp 业绩日报及 IPO 审计准备。'
    },
    badge: {
      id: 'SOLUSI UNTUK EXECUTIVES',
      en: 'EXECUTIVE & FOUNDER SOLUTION',
      zh: '高管与创始人解决方案'
    },
    heroSub: {
      id: 'Dapatkan visibilitas 360 derajat atas omzet harian, performa tim sales, dan rasio konversi tanpa perlu membuka puluhan dashboard terpisah.',
      en: 'Gain 360-degree visibility over daily revenue, sales performance, and conversion ratios in one daily executive digest.',
      zh: '在单份高管日报中全方位掌握每日营收、销售绩效及转化率。'
    },
    benefits: {
      id: [
        'Laporan ringkasan eksekutif dikirim otomatis ke grup WhatsApp jam 08:00 pagi.',
        'Standarisasi pelaporan data keuangan & operasional sesuai syarat audit IPO.',
        'Monitoring otomatis biaya akuisisi pelanggan (CAC) vs Customer Lifetime Value (LTV).'
      ],
      en: [
        'Automated executive summary dispatches delivered to WhatsApp groups at 08:00 AM.',
        'Standardization of financial & operational reporting meeting IPO audit rules.',
        'Automated tracking of Customer Acquisition Cost (CAC) vs Lifetime Value (LTV).'
      ],
      zh: [
        '每日早 08:00 自动将高管摘要发送至 WhatsApp 微信工作群。',
        '标准化财务与运营数据报告，符合 IPO 审计规范。',
        '自动追踪客户获取成本 (CAC) 与客户终身价值 (LTV)。'
      ]
    },
    metrics: [
      { label: { id: 'Visibilitas Data', en: 'Data Visibility', zh: '数据透明度' }, val: '100% Real-time' },
      { label: { id: 'Efisiensi Waktu CEO', en: 'CEO Time Saved', zh: 'CEO 决策时间节省' }, val: '15h/minggu' },
      { label: { id: 'Audit Compliance', en: 'Audit Readiness', zh: '审计合规度' }, val: 'IPO-Ready' }
    ]
  },
  {
    slug: 'sales-manager',
    category: 'role',
    icon: 'chart',
    title: {
      id: 'Sales & Growth Manager',
      en: 'Sales & Growth Manager',
      zh: '销售与增长经理'
    },
    desc: {
      id: 'Distribusi lead otomatis, monitoring kecepatan closing tim, dan eliminasikan lead dingin.',
      en: 'Automated lead distribution, team closing velocity monitoring, and cold lead prevention.',
      zh: '自动线索分发、团队成交速度监控及线索流失预防。'
    },
    badge: {
      id: 'SOLUSI TIM SALES & GROWTH',
      en: 'SALES & GROWTH TEAM SOLUTION',
      zh: '销售与增长团队解决方案'
    },
    heroSub: {
      id: 'Pastikan 100% lead dibalas dalam hitungan detik, rotasi lead secara adil ke sales rep, dan dapatkan prediksi pipeline revenue bulanan.',
      en: 'Ensure 100% of leads get responded to in seconds, round-robin lead allocation, and monthly revenue pipeline forecasting.',
      zh: '确保 100% 线索在数秒内得到响应、公平均衡分发线索及月度销售预测。'
    },
    benefits: {
      id: [
        'Round-robin lead routing otomatis ke sales rep yang sedang aktif.',
        'Deteksi lead panas dan eskalasi otomatis jika sales rep lambat merespon.',
        'Dashboard visual pipeline deal dari kontak pertama hingga pencairan invoice.'
      ],
      en: [
        'Automated round-robin lead routing to active online sales representatives.',
        'Hot lead detection and automatic escalation if sales response stalls.',
        'Visual deal pipeline dashboards from first contact to invoice clearance.'
      ],
      zh: [
        '自动将线索轮询分发给在线的销售代表。',
        '热点线索识别及当销售未及时响应时的自动升级机制。',
        '从首次接触到发票结算的全流程可视化销售管道。'
      ]
    },
    metrics: [
      { label: { id: 'Closing Rate', en: 'Closing Velocity', zh: '成交速度' }, val: '+62%' },
      { label: { id: 'Lead Terlewat', en: 'Missed Leads', zh: '遗漏线索率' }, val: '0%' },
      { label: { id: 'Siklus Penjualan', en: 'Sales Cycle Time', zh: '销售周期缩短' }, val: '-40%' }
    ]
  },
  {
    slug: 'customer-support',
    category: 'role',
    icon: 'headset',
    title: {
      id: 'Customer Support Lead',
      en: 'Customer Support Lead',
      zh: '客服主管'
    },
    desc: {
      id: 'Otomatisasi balasan FAQ, multi-agent WhatsApp Inbox, dan penilaian kepuasan CSAT.',
      en: 'Automated FAQ resolution, multi-agent WhatsApp shared inbox, and CSAT scoring.',
      zh: '常见问题自动解答、多客服 WhatsApp 共享收件箱及 CSAT 满意度评分。'
    },
    badge: {
      id: 'SOLUSI CUSTOMER SERVICE',
      en: 'CUSTOMER SERVICE SOLUTION',
      zh: '客户服务主管解决方案'
    },
    heroSub: {
      id: 'Pangkas beban kerja tim CS hingga 70% dengan AI chatbot yang menangani pertanyaan berulang dan teruskan kasus kompleks ke agent manusia.',
      en: 'Reduce CS workload by 70% with AI chatbots handling repetitive queries while routing complex issues to human agents.',
      zh: '通过 AI 机器人解答重复性问题，将客服工作量降低 70%，复杂问题无缝转接人工。'
    },
    benefits: {
      id: [
        'Multi-agent WhatsApp Inbox 1 nomor dipakai bersama puluhan staf CS.',
        'AI menjawab FAQ produk, harga, dan syarat pengiriman secara instan 24/7.',
        'Survei kepuasan pelanggan (CSAT) otomatis dikirimkan setelah chat selesai.'
      ],
      en: [
        'Single WhatsApp number multi-agent inbox shared across dozens of CS staff.',
        'AI instantly resolves product, pricing, and shipping FAQs 24/7.',
        'Automated Customer Satisfaction (CSAT) surveys sent upon ticket resolution.'
      ],
      zh: [
        '单一 WhatsApp 号码供数十名客服人员共享协同。',
        'AI 全天候即时解答产品、价格及物流等常见问题。',
        '对话结束完自动发送客户满意度 (CSAT) 调查。'
      ]
    },
    metrics: [
      { label: { id: 'Beban CS Terpangkas', en: 'Ticket Deflection', zh: '客服工作量降低' }, val: '70%' },
      { label: { id: 'Skor CSAT', en: 'CSAT Score', zh: '满意度评分' }, val: '4.9 / 5.0' },
      { label: { id: 'Waktu Tunggu Customer', en: 'Wait Time', zh: '客户等待时间' }, val: '0 Detik' }
    ]
  },
  {
    slug: 'marketing-team',
    category: 'role',
    icon: 'target',
    title: {
      id: 'Digital Marketing Team',
      en: 'Digital Marketing Team',
      zh: '数字营销团队'
    },
    desc: {
      id: 'Tracking konversi Meta/Google Ads ke WhatsApp, broadcast promosi segmented, dan retensi pelanggan.',
      en: 'Meta/Google Ads to WhatsApp conversion tracking, segmented promo broadcasts, and retention.',
      zh: 'Meta/Google 广告至 WhatsApp 转化追踪、精准分群优惠群发及客户留存。'
    },
    badge: {
      id: 'SOLUSI DIGITAL MARKETING',
      en: 'DIGITAL MARKETING SOLUTION',
      zh: '数字营销团队解决方案'
    },
    heroSub: {
      id: 'Ukur ROI kampanye iklan hingga ke penjualan nyata di WhatsApp, jalankan kampanye retargeting terarah, dan cegah pemborosan ad spend.',
      en: 'Track real advertising ROI down to closed WhatsApp sales, execute targeted retargeting campaigns, and eliminate ad waste.',
      zh: '精准追踪广告投资回报率至 WhatsApp 实际成交，执行定向重定向营销，消除广告浪费。'
    },
    benefits: {
      id: [
        'Pelacakan atribusi sumber iklan (Meta Ads / Google Ads / TikTok Ads) di WhatsApp.',
        'Broadcast pesan promosi ke segmen audiens spesifik berdasar riwayat belanja.',
        'A/B testing narasi copywriting balasan AI untuk memaksimalkan rasio konversi.'
      ],
      en: [
        'Ad source attribution tracking (Meta Ads / Google Ads / TikTok Ads) directly inside WhatsApp.',
        'Segmented promotional broadcasts tailored to past purchase behavior.',
        'A/B testing AI response copywriting to maximize click-to-conversion rate.'
      ],
      zh: [
        '在 WhatsApp 内归因追踪广告来源（Meta / Google / TikTok 广告）。',
        '根据历史购买行为向特定客群精准群发促销信息。',
        'A/B 测试 AI 文案回复，最大化点击转化率。'
      ]
    },
    metrics: [
      { label: { id: 'ROAS Iklan', en: 'Ad ROAS Lift', zh: '广告 ROAS 提升' }, val: '+3.4x' },
      { label: { id: 'Biaya per Lead (CPL)', en: 'Cost Per Lead', zh: '线索成本降低' }, val: '-45%' },
      { label: { id: 'Open Rate Broadcast', en: 'Broadcast Open Rate', zh: '群发打开率' }, val: '96%' }
    ]
  },

  // --- FITUR ---
  {
    slug: 'ticketing-system',
    category: 'fitur',
    icon: 'ticket',
    title: {
      id: 'Ticketing System',
      en: 'Ticketing System',
      zh: '工单系统 (Ticketing System)'
    },
    desc: {
      id: 'Kelola tiket keluhan & kendala pelanggan dari seluruh channel komunikasi secara otomatis dalam satu platform.',
      en: 'Manage customer support tickets and issue logs automatically across all channels in one place.',
      zh: '全通道自动汇总并管理客户投诉与问题工单。'
    },
    badge: {
      id: 'FITUR ENGINE UNGGULAN',
      en: 'FEATURE ENGINE HIGHLIGHT',
      zh: '核心功能引擎'
    },
    heroSub: {
      id: 'Ubah setiap pesan kendala pelanggan dari WhatsApp, Instagram, dan Email menjadi tiket otomatis dengan nomor resi unik, SLA pengerjaan, dan eskalasi pintar.',
      en: 'Convert every customer issue message into automated tickets with unique tracking IDs, SLA timers, and smart escalation.',
      zh: '将来自 WhatsApp、Instagram 及邮件的客户问题一键转为具备唯一追踪号、SLA 时限及智能升级的工单。'
    },
    benefits: {
      id: [
        'Pembuatan tiket otomatis berdasar kata kunci kendala pelanggan.',
        'Pengaturan SLA (Service Level Agreement) jam respon & jam penyelesaian tiket.',
        'Notifikasi otomatis ke pelanggan saat status tiket diperbarui (Open -> In Progress -> Resolved).'
      ],
      en: [
        'Automated ticket creation based on customer issue keywords.',
        'SLA rules for target response and resolution times.',
        'Automated WhatsApp updates sent to customers on status changes (Open -> In Progress -> Resolved).'
      ],
      zh: [
        '根据客户问题关键词自动创建工单。',
        '设置响应与解决时间的 SLA 服务等级协议。',
        '工单状态更新时（待处理 -> 处理中 -> 已解决）自动向客户推送通知。'
      ]
    },
    metrics: [
      { label: { id: 'Waktu Penyelesaian', en: 'Resolution Time', zh: '工单解决耗时' }, val: '50% Lebih Cepat' },
      { label: { id: 'Transparansi Status', en: 'Status Transparency', zh: '状态透明度' }, val: '100%' },
      { label: { id: 'Kepuasan Pelanggan', en: 'Customer Satisfaction', zh: '客户满意度' }, val: '4.9/5.0' }
    ]
  },
  {
    slug: 'lead-management',
    category: 'fitur',
    icon: 'funnel',
    title: {
      id: 'Lead Management',
      en: 'Lead Management',
      zh: '线索管理 (Lead Management)'
    },
    desc: {
      id: 'Kelola pipeline leads & follow-up otomatis dari satu platform terpusat.',
      en: 'Manage lead pipelines and automated follow-ups from one centralized platform.',
      zh: '在统一平台内管理潜在线索管道及自动跟进。'
    },
    badge: {
      id: 'FITUR CRM & LEAD NURTURING',
      en: 'CRM & LEAD NURTURING FEATURE',
      zh: 'CRM 与线索培育功能'
    },
    heroSub: {
      id: 'Otomatiskan kualifikasi calon pembeli, beri skor proskpektus (lead scoring), dan jadwalkan follow-up WhatsApp berulang tanpa rasa canggung.',
      en: 'Automate prospect qualification, assign lead scores, and schedule recurring non-intrusive WhatsApp follow-ups.',
      zh: '全自动买家意向筛选、精准线索打分及定时发送得体的 WhatsApp 跟进。'
    },
    benefits: {
      id: [
        'Scoring otomatis berbasis respon & nilai potensi transaksi calon pembeli.',
        'Drip campaign follow-up WhatsApp berjadwal (Hari ke-1, Hari ke-3, Hari ke-7).',
        'Tagging segmen otomatis (Cold, Warm, Hot, Qualified, Customer).'
      ],
      en: [
        'Automated lead scoring based on engagement and deal value potential.',
        'Scheduled WhatsApp follow-up drip campaigns (Day 1, Day 3, Day 7).',
        'Automated lead tagging (Cold, Warm, Hot, Qualified, Customer).'
      ],
      zh: [
        '根据互动频次与潜在交易额自动进行线索打分。',
        '定时 WhatsApp 循序渐进式跟进（第1天、第3天、第7天）。',
        '自动标签客群分类（冷线索、温线索、热线索、已成交）。'
      ]
    },
    metrics: [
      { label: { id: 'Kenaikan Lead Hot', en: 'Qualified Leads Lift', zh: '优质线索提升' }, val: '+74%' },
      { label: { id: 'Follow-up Tepat Waktu', en: 'On-time Follow-up', zh: '跟进准时率' }, val: '100%' },
      { label: { id: 'Rasio Closing', en: 'Closing Ratio', zh: '成交转化率' }, val: '+42%' }
    ]
  },
  {
    slug: 'sales-pipeline',
    category: 'fitur',
    icon: 'kanban',
    title: {
      id: 'Sales Pipeline Management',
      en: 'Sales Pipeline Management',
      zh: '销售管道 (Sales Pipeline)'
    },
    desc: {
      id: 'Kelola tahapan deal secara visual dari leads masuk hingga closing invoice.',
      en: 'Visually track deal stages from incoming lead to closed invoice.',
      zh: '从线索进入到最终发票结算全流程可视化管理。'
    },
    badge: {
      id: 'FITUR VISUAL PIPELINE',
      en: 'VISUAL PIPELINE FEATURE',
      zh: '可视化管道功能'
    },
    heroSub: {
      id: 'Pantau posisi transaksi setiap calon pembeli dalam bentuk board Kanban interaktif, dari Kontak Pertama, Penawaran, Negosiasi, hingga Pembayaran.',
      en: 'Track every prospective deal stage in interactive Kanban boards - from Initial Contact, Proposal, Negotiation to Payment.',
      zh: '在看板视图中直观掌握每笔交易进阶状态：首次接洽、方案报价、商务谈判到回款。'
    },
    benefits: {
      id: [
        'Tampilan Kanban board interaktif drag-and-drop status deal.',
        'Prediksi estimasi omzet masuk bulan ini berdasar probabilitas closing.',
        'Peringatan otomatis saat ada deal yang stagnan terlalu lama di satu tahap.'
      ],
      en: [
        'Interactive drag-and-drop Kanban deal status board.',
        'Real-time monthly revenue forecasting based on win probability.',
        'Automated stagnation alerts when deals stay too long in one stage.'
      ],
      zh: [
        '支持拖拽的交互式 Kanban 看板。',
        '根据胜率概率实时预测当月营收。',
        '当交易在某一阶段滞留过久时发出自动预警。'
      ]
    },
    metrics: [
      { label: { id: 'Akurasi Forecast', en: 'Forecast Accuracy', zh: '预测准确度' }, val: '94%' },
      { label: { id: 'Deal Stagnan', en: 'Stagnant Deal Alert', zh: '滞留交易减少' }, val: '-60%' },
      { label: { id: 'Kecepatan Sales', en: 'Sales Velocity', zh: '销售推进速度' }, val: '2.5x' }
    ]
  },
  {
    slug: 'client-management',
    category: 'fitur',
    icon: 'repeat',
    title: {
      id: 'Client & Renewal Management',
      en: 'Client & Renewal Management',
      zh: '客户续约 (Renewal Management)'
    },
    desc: {
      id: 'Kelola hubungan klien pasca-penjualan & jadwal renewal otomatis.',
      en: 'Manage post-sale client relationships and automated subscription renewal schedules.',
      zh: '售后期客户关系维系及全自动到期续约提醒。'
    },
    badge: {
      id: 'FITUR RETENSI & RENEWAL',
      en: 'RETENTION & RENEWAL FEATURE',
      zh: '客户留存与续约功能'
    },
    heroSub: {
      id: 'Cegah churn pelanggan dengan sistem pengingat jatuh tempo kontrak otomatis, penawaran upsell/cross-sell, dan penjadwalan account review.',
      en: 'Prevent customer churn with automated contract expiration reminders, upsell offers, and account review scheduling.',
      zh: '通过全自动合同到期提醒、交叉增值销售及定期账户复盘，有效降低客户流失。'
    },
    benefits: {
      id: [
        'Pengingat H-30, H-14, H-3 jatuh tempo kontrak langganan via WhatsApp.',
        'Rekomendasi otomatis paket upgrade (upselling) saat masa pakai habis.',
        'Catatan riwayat interaksi & preferensi unik setiap klien secara rapi.'
      ],
      en: [
        'H-30, H-14, H-3 automated subscription expiry alerts via WhatsApp.',
        'Automated package upgrade recommendations (upselling) prior to expiration.',
        'Centralized client interaction log and unique preference history.'
      ],
      zh: [
        '提前30天、14天及3天自动发送 WhatsApp 续约提醒。',
        '到期前自动推荐套餐升级增值方案 (upselling)。',
        '整洁集中地记录每位客户的互动历史与独特偏好。'
      ]
    },
    metrics: [
      { label: { id: 'Rasio Renewal', en: 'Renewal Rate', zh: '续约率' }, val: '91%' },
      { label: { id: 'Penurunan Churn', en: 'Churn Reduction', zh: '流失率降低' }, val: '-55%' },
      { label: { id: 'Upsell Revenue', en: 'Upsell Revenue', zh: '增值销售收入' }, val: '+34%' }
    ]
  },
  {
    slug: 'whatsapp-autopilot',
    category: 'fitur',
    icon: 'bot',
    title: {
      id: 'WhatsApp Autopilot Chatbot',
      en: 'WhatsApp Autopilot Chatbot',
      zh: 'WhatsApp 全自动 AI 机器人'
    },
    desc: {
      id: 'Balas chat pelanggan dalam 2 detik 24/7 dengan AI ber-NLP tinggi.',
      en: 'Respond to customer chats in under 2 seconds 24/7 with high-NLP AI.',
      zh: '2秒内即时响应客户，24/7 全天候高情商 NLP AI 对话。'
    },
    badge: {
      id: 'FITUR OTOMASI AI CHAT',
      en: 'AI CHAT AUTOMATION FEATURE',
      zh: 'AI 对话自动化功能'
    },
    heroSub: {
      id: 'Asisten AI pintar yang dilatih memahami bahasa gaul, singkatan, dan konteks negosiasi pembeli Indonesia secara alami.',
      en: 'Smart AI assistant trained to naturally understand local slang, abbreviations, and buyer negotiation context.',
      zh: '训练有素的智能 AI 助手，自然理解口语、缩写及买家议价心理。'
    },
    benefits: {
      id: [
        'Waktu respon rata-rata di bawah 2 detik tanpa pending.',
        'Memahami teks panjang, Voice Note (catatan suara), dan foto produk.',
        'Verifikasi bukti transfer bank otomatis & generate link pembayaran.'
      ],
      en: [
        'Average response speed under 2 seconds with zero queue delays.',
        'Understands long text, Voice Notes, and product photos.',
        'Automated bank transfer receipt verification & instant checkout link generation.'
      ],
      zh: [
        '平均响应时间低于2秒，零延迟无压单。',
        '完美理解长文本、语音留言及产品图片。',
        '自动核验银行转账凭证并生成直接支付链接。'
      ]
    },
    metrics: [
      { label: { id: 'Kecepatan Balas', en: 'Response Speed', zh: '响应速度' }, val: '1.8 Detik' },
      { label: { id: 'Operasional 24/7', en: '24/7 Uptime', zh: '24/7 在线率' }, val: '99.99%' },
      { label: { id: 'Lonjakan Closing', en: 'Closing Lift', zh: '成交量提升' }, val: '+58%' }
    ]
  },

  // --- INTEGRASI ---
  {
    slug: 'whatsapp-api',
    category: 'integrasi',
    icon: 'message',
    title: {
      id: 'WhatsApp Business API',
      en: 'WhatsApp Business API',
      zh: 'WhatsApp Official API'
    },
    desc: {
      id: 'Integrasi resmi WhatsApp Business API Centang Hijau (Green Tick) untuk skala enterprise.',
      en: 'Official WhatsApp Business API Green Tick integration for enterprise scale.',
      zh: '官方 WhatsApp 绿标 (Green Tick) 商业 API 企业级集成。'
    },
    badge: {
      id: 'INTEGRASI OFFICIAL API',
      en: 'OFFICIAL API INTEGRATION',
      zh: '官方 API 集成'
    },
    heroSub: {
      id: 'Dapatkan kredibilitas maksimal dengan centang hijau resmi WhatsApp, bebas risiko blokir, dan kapasitas broadcast ribuan pesan per detik.',
      en: 'Gain maximum brand credibility with official WhatsApp green ticks, anti-blocking protection, and high-throughput broadcasts.',
      zh: '获取官方绿标以提升品牌公信力，防封号保护及每秒数千条的高吞吐群发能力。'
    },
    benefits: {
      id: [
        'Official Green Tick Verified Badge di nama profil bisnis WhatsApp.',
        'Multi-device & multi-admin login tanpa batas per 1 nomor telepon.',
        'Broadcast ribuan pesan terverifikasi tanpa risiko pemblokiran nomor.'
      ],
      en: [
        'Official Green Tick Verified Badge on your WhatsApp business profile name.',
        'Unlimited multi-device & multi-admin logins per single phone number.',
        'Broadcast thousands of verified notification messages without ban risks.'
      ],
      zh: [
        'WhatsApp 商业名片尊享官方绿标认证。',
        '单套号码支持无限多设备与多管理员协同登录。',
        '安全群发数万条已验证通知消息，无封号风险。'
      ]
    },
    metrics: [
      { label: { id: 'Keamanan Akun', en: 'Account Security', zh: '账号安全度' }, val: 'Anti-Ban' },
      { label: { id: 'Kapasitas Broadcast', en: 'Broadcast Throughput', zh: '群发吞吐量' }, val: '10,000+/mnt' },
      { label: { id: 'Kepercayaan Customer', en: 'Trust Lift', zh: '客户信任度' }, val: '100%' }
    ]
  },
  {
    slug: 'instagram-direct',
    category: 'integrasi',
    icon: 'camera',
    title: {
      id: 'Instagram Direct Automation',
      en: 'Instagram Direct Automation',
      zh: 'Instagram 自动私信集成'
    },
    desc: {
      id: 'Otomatiskan balasan DM & komentar postingan Instagram langsung ke corong penjualan.',
      en: 'Automate Instagram DMs and post comment replies straight into your sales funnel.',
      zh: '自动回复 Instagram 私信与帖子评论，直接接入销售漏斗。'
    },
    badge: {
      id: 'INTEGRASI SOCIAL MEDIA',
      en: 'SOCIAL MEDIA INTEGRATION',
      zh: '社交媒体集成'
    },
    heroSub: {
      id: 'Konversi setiap komentar "Cek DM kak" di Instagram menjadi obrolan transaksi otomatis di DM dan teruskan calon pembeli ke WhatsApp.',
      en: 'Convert every "Check DM" comment on Instagram posts into automated DM sales conversations and WhatsApp handoffs.',
      zh: '将 Instagram 帖子下的评论一键转换为 DM 自动私信销售对话，并引流至 WhatsApp。'
    },
    benefits: {
      id: [
        'Balasan otomatis komentar feed, Reels, dan Story Mentions dalam hitungan detik.',
        'Kirim katalog produk & voucher diskon otomatis via Instagram Direct Message.',
        'Sinkronisasi kontak pembeli Instagram ke database CRM Cardi.'
      ],
      en: [
        'Instant automated replies for Feed comments, Reels, and Story Mentions.',
        'Auto-send product catalogs & discount vouchers via Instagram Direct Message.',
        'Sync Instagram buyer leads directly into Cardi CRM databases.'
      ],
      zh: [
        '数秒内自动回复 Feed 评论、Reels 卷轴及 Story 提及。',
        '通过 Instagram 私信自动发送产品图册与优惠券。',
        '将 Instagram 买家线索同步至 Cardi CRM 数据库。'
      ]
    },
    metrics: [
      { label: { id: 'Konversi Comment to DM', en: 'Comment to DM Rate', zh: '评论转私信率' }, val: '+92%' },
      { label: { id: 'Lead dari Instagram', en: 'Instagram Leads', zh: '社媒线索增长' }, val: '+3.2x' },
      { label: { id: 'Respon Story', en: 'Story Response Speed', zh: 'Story 响应速度' }, val: '2 Detik' }
    ]
  },
  {
    slug: 'payment-gateway',
    category: 'integrasi',
    icon: 'card',
    title: {
      id: 'Payment Gateway Integration',
      en: 'Payment Gateway Integration',
      zh: '聚合支付网关集成'
    },
    desc: {
      id: 'Terhubung dengan QRIS, Virtual Account, Credit Card, dan E-Wallet otomatis.',
      en: 'Connected with QRIS, Virtual Accounts, Credit Cards, and E-Wallets automatically.',
      zh: '自动接通 QRIS、虚拟账户、信用卡及各类电子钱包。'
    },
    badge: {
      id: 'INTEGRASI PEMBAYARAN',
      en: 'PAYMENT INTEGRATION',
      zh: '支付网关集成'
    },
    heroSub: {
      id: 'Buat link pembayaran otomatis di dalam chat WhatsApp dengan konfirmasi instan dari Midtrans, Xendit, Mayar, dan QRIS.',
      en: 'Generate automated payment links inside WhatsApp chats with instant webhook confirmations from payment gateways.',
      zh: '在 WhatsApp 对话中一键生成自动支付链接，并接收来自 Midtrans、Xendit、Mayar 及 QRIS 的即时回调确认。'
    },
    benefits: {
      id: [
        'Generate invoice & QRIS dinamis otomatis sesuai nominal transaksi.',
        'Verifikasi otomatis status pembayaran masuk tanpa cek mutasi bank manual.',
        'Kirim tanda terima resmi (receipt) otomatis via WhatsApp setelah pembayaran sukses.'
      ],
      en: [
        'Automated dynamic QRIS & invoice link generation matched to cart total.',
        'Real-time automated payment verification eliminating manual bank statement checks.',
        'Automated digital receipt dispatch via WhatsApp upon successful checkout.'
      ],
      zh: [
        '根据购物车金额自动生成动态 QRIS 与发票链接。',
        '实时自动核验到账状态，无需人工对账。',
        '支付成功后通过 WhatsApp 自动发送电子收据。'
      ]
    },
    metrics: [
      { label: { id: 'Kecepatan Checkout', en: 'Checkout Speed', zh: '结账速度' }, val: '10 Detik' },
      { label: { id: 'Akurasi Pembayaran', en: 'Payment Accuracy', zh: '对账准确率' }, val: '100%' },
      { label: { id: 'Penurunan Abandoned Cart', en: 'Cart Abandonment Cut', zh: '弃单率降低' }, val: '-48%' }
    ]
  }
];

export function getSolutionBySlug(slug: string): SolutionItem | undefined {
  return solutionsData.find(s => s.slug === slug);
}

export function getSolutionsByCategory(category: SolutionItem['category']): SolutionItem[] {
  return solutionsData.filter(s => s.category === category);
}
