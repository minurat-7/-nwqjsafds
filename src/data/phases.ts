import type { PitchingPhase } from '../types';

export const phases: PitchingPhase[] = [
  {
    id: 'windup',
    order: 1,
    name: 'Wind-Up / Setup',
    shortName: 'Wind-Up',
    icon: 'CircleDot',
    color: 'slate',
    description:
      '와인드업은 투구 동작 전체의 기초를 세우는 단계다. 올바른 자세, 밸런스, 초기 모멘텀이 이후 키네틱 체인 전체를 좌우한다. 재현성 높은 셋업이 일관된 투구의 시작점이다.',
    biomechanicsNotes: {
      summary:
        '무게중심(COM)이 드라이브 레그 위에 안정적으로 유지되어야 이후 모든 단계의 타이밍 오류를 최소화할 수 있다.',
      details: [
        '어깨 너비 스탠스가 고관절 외전근(hip abductors)을 활성화해 안정적인 플랫폼을 제공한다.',
        '두부(head)와 시선은 타겟에 고정 — 경추 안정성이 전정 감각 교란을 줄인다.',
        '초기 무게 이동 중 COM은 드라이브 레그 발목 위에 유지되어야 한다.',
        '어깨와 엉덩이가 홈플레이트를 향해 정렬된 상태에서 로커 스텝이 시작된다.',
      ],
      musculatureInvolved: [
        'Gluteus medius (중간 둔근)',
        'Tibialis anterior (전경골근)',
        'Core stabilizers (복횡근, 다열근)',
      ],
    },
    keyMetrics: [
      {
        label: '스탠스 폭',
        value: '어깨 너비',
        description: '로커 스텝을 위한 측면 안정성 확보.',
      },
      {
        label: '초기 트렁크 경사',
        value: '< 5°',
        unit: '도',
        description: '셋 포지션에서 과도한 전방 경사는 무게중심 이탈을 유발한다.',
      },
    ],
    commonFaults: [
      {
        id: 'excessive-sway',
        title: '과도한 측면 흔들림 (Lateral Sway)',
        description:
          '드라이브 레그를 벗어난 흔들림은 스트라이드에서 조기 체중 이동을 유발하고 타이밍 오류로 이어진다.',
        cues: ['발바닥으로 고무를 느껴라', '힙을 발목 위에 쌓아라', '상체를 조용히 유지해라'],
        drillIds: ['rocker-step-drill', 'balance-post-drill'],
      },
    ],
  },
  {
    id: 'leg-lift',
    order: 2,
    name: 'Leg Lift / Balance Point',
    shortName: 'Leg Lift',
    icon: 'ArrowUp',
    color: 'indigo',
    description:
      '레그리프트는 투구에 필요한 위치 에너지를 축적하고, 드라이브 레그 위의 균형점(Balance Point)에서 엉덩이와 무릎의 올바른 정렬을 확인하는 단계다.',
    biomechanicsNotes: {
      summary:
        '레그리프트 높이보다 균형과 타이밍이 중요하다. 과도하게 높은 레그리프트는 오히려 불안정성을 초래한다.',
      details: [
        '리프트 다리 고관절은 90° 굴곡이 이상적 — 과도한 굴곡은 드라이브 파워를 저하시킨다.',
        '드라이브 레그 발목, 무릎, 엉덩이가 수직으로 쌓여야(stacked) 한다.',
        '어깨는 릴렉스 상태, 팔꿈치는 자연스럽게 — 상체 긴장은 하체 모멘텀을 방해한다.',
        '발끝이 지면에 가볍게 닿는 "float" 동작이 전환 타이밍을 부드럽게 한다.',
      ],
      musculatureInvolved: [
        'Gluteus maximus (대둔근)',
        'Vastus lateralis (외측광근)',
        'Soleus / Gastrocnemius (비복근계)',
      ],
    },
    keyMetrics: [
      {
        label: '리프트 다리 고관절 각도',
        value: '80–100°',
        unit: '도',
        description: '과도하거나 낮은 리프트는 드라이브 파워와 타이밍에 모두 영향을 준다.',
      },
      {
        label: '드라이브 레그 무릎 굴곡',
        value: '10–20°',
        unit: '도',
        description: '약간의 굴곡이 폭발적인 드라이브 준비 상태를 만든다.',
      },
    ],
    commonFaults: [
      {
        id: 'collapsing-drive-leg',
        title: '드라이브 레그 붕괴 (Collapsing)',
        description:
          '드라이브 레그가 너무 구부러지면 힘이 흡수되어 스트라이드 추진력이 감소한다.',
        cues: [
          '드라이브 레그를 "스프링"처럼 느껴라',
          '지면을 밀어내듯 드라이브하라',
          '무릎이 발끝을 넘지 않도록',
        ],
        drillIds: ['rocker-step-drill', 'hip-hinge-drill'],
      },
    ],
  },
  {
    id: 'stride',
    order: 3,
    name: 'Stride / Hip Drive',
    shortName: 'Stride',
    icon: 'MoveRight',
    color: 'orange',
    description:
      '스트라이드는 저장된 위치 에너지를 선속도(linear momentum)로 전환하는 단계다. 힙 드라이브가 강할수록 투수판에서 홈플레이트 방향으로 강력한 운동 에너지가 생성된다. 스트라이드 길이와 방향, 발 착지 각도가 모두 다음 단계의 회전력에 영향을 미친다.',
    biomechanicsNotes: {
      summary:
        '스트라이드는 단순히 "발을 내딛는 것"이 아니라, 드라이브 레그가 지면을 뒤로 밀어내며(ground reaction force) 전방으로 추진하는 능동적 동작이다.',
      details: [
        '최적 스트라이드 길이: 신장의 80–100%. 짧으면 파워 손실, 길면 안정성 저하.',
        '착지 발의 방향은 타겟 라인에서 0–5° 이내 (인라인 착지가 이상적).',
        '힙 선도(hip lead): 엉덩이가 어깨보다 먼저 이동해야 최대 X-Factor 달성이 가능하다.',
        '스트라이드 중 상체는 비교적 닫힌 상태(closed)를 유지 — 조기 오픈은 팔에 스트레스를 준다.',
        '착지 순간 발목 도싱플렉시온(dorsiflexion)이 있어야 충격 흡수와 회전 전환이 부드럽다.',
      ],
      musculatureInvolved: [
        'Hip flexors (장요근)',
        'Gluteus maximus (대둔근) — 드라이브 레그',
        'Hamstrings (햄스트링) — 편심 제동',
        'Quadriceps (대퇴사두근) — 착지 시 충격 흡수',
      ],
    },
    keyMetrics: [
      {
        label: '스트라이드 길이',
        value: '80–100%',
        unit: '신장 대비',
        description: '신장 대비 80–100%가 최적. 엘리트 투수 평균 약 87%.',
      },
      {
        label: '착지 발 방향',
        value: '0–5°',
        unit: '도 (오픈)',
        description: '너무 닫히거나 열리면 회전 효율이 떨어진다.',
      },
      {
        label: '스트라이드 방향',
        value: '인라인 ±2인치',
        description: '타겟 라인에서 2인치 이내 크로스/오픈이 이상적.',
      },
    ],
    commonFaults: [
      {
        id: 'short-stride',
        title: '짧은 스트라이드',
        description: '스트라이드가 짧으면 선 모멘텀이 부족해 회전 에너지 생성이 감소한다.',
        cues: ['힙으로 먼저 드라이브하라', '지면을 뒤로 밀어라', '발끝이 홈을 향해 착지'],
        drillIds: ['hip-hinge-drill', 'stride-excercise-drill', 'pivot-pickoff-drill'],
      },
      {
        id: 'open-landing',
        title: '오픈 착지 (Early Opening)',
        description:
          '착지 발이 너무 열리면 엉덩이 회전이 조기에 발생해 팔에 과도한 스트레스가 가해진다.',
        cues: ['착지 전까지 엉덩이를 닫아라', '발끝이 3루(우투수 기준)를 향하도록', '벽을 밀듯이'],
        drillIds: ['pivot-pickoff-drill', 'separation-band-drill'],
      },
    ],
  },
  {
    id: 'hip-shoulder',
    order: 4,
    name: 'Hip-Shoulder Separation',
    shortName: 'X-Factor',
    icon: 'Zap',
    color: 'yellow',
    description:
      'X-Factor라고도 불리는 힙-숄더 세퍼레이션은 파워 생성의 핵심 메커니즘이다. 착지 후 엉덩이는 먼저 회전하고 어깨는 닫힌 채 유지되며, 이 비틀림이 탄성 에너지를 저장한다. 이 에너지가 해제되면서 팔 가속이 극대화된다.',
    biomechanicsNotes: {
      summary:
        '힙-숄더 세퍼레이션은 투구 파워의 "스프링 메커니즘"이다. 분리각이 클수록 더 많은 탄성 에너지가 저장된다.',
      details: [
        '최적 분리각: 40–60°. 이 각도에서 스트레치-쇼텐닝 사이클(SSC)이 최대화된다.',
        '착지 발이 지면을 잠그는 순간(foot strike) 엉덩이 회전이 시작되어야 한다.',
        '어깨는 착지 후에도 닫힌 상태를 유지 — 조기 어깨 오픈은 "casting"을 유발한다.',
        '골반 회전 속도 피크가 어깨 회전 속도 피크보다 선행되어야 한다 (proximal-to-distal sequencing).',
        '코어 회전근(obliques, transversus abdominis)이 에너지 전달의 핵심 경로.',
      ],
      musculatureInvolved: [
        'Hip rotators (고관절 회전근)',
        'Obliques (복사근)',
        'Thoracolumbar fascia (흉요근막)',
        'Latissimus dorsi (광배근)',
      ],
    },
    keyMetrics: [
      {
        label: 'X-Factor 각도',
        value: '40–60°',
        unit: '도',
        description: '힙과 숄더 라인 사이의 각도. 엘리트 평균 약 48°.',
      },
      {
        label: '힙 회전 선행 시간',
        value: '~30ms',
        unit: '밀리초',
        description: '어깨 회전보다 약 30ms 먼저 힙 회전이 시작되어야 한다.',
      },
    ],
    commonFaults: [
      {
        id: 'early-shoulder-opening',
        title: '조기 어깨 오픈 (Casting)',
        description:
          '힙보다 어깨가 먼저 열리면 에너지 누출이 발생하고, 팔에 과도한 보상 동작이 필요해진다.',
        cues: [
          '힙이 먼저, 어깨는 나중에',
          '착지 때까지 글러브를 닫아라',
          '어깨를 "홀드"하는 느낌',
        ],
        drillIds: ['separation-band-drill', 'rocker-step-drill', 'hip-turn-drill'],
      },
      {
        id: 'insufficient-separation',
        title: '불충분한 분리 (Insufficient X-Factor)',
        description:
          '분리각이 30° 미만이면 파워 생성 잠재력이 크게 감소하며 팔에만 의존하는 투구가 된다.',
        cues: ['골반을 더 공격적으로 드라이브', '어깨를 늦게 열어라', '코어를 비틀어라'],
        drillIds: ['hip-turn-drill', 'separation-band-drill'],
      },
    ],
  },
  {
    id: 'arm-path',
    order: 5,
    name: 'Arm Path / External Rotation',
    shortName: 'Arm Path',
    icon: 'RotateCw',
    color: 'purple',
    description:
      '암 패스는 팔이 투구 위치로 이동하는 경로다. 최대 외회전(MER: Maximum External Rotation)은 어깨 관절이 극도로 외회전하는 순간으로, 이 때 저장된 탄성 에너지가 공에 전달된다. 팔꿈치 높이와 외회전 타이밍이 속도와 부상 위험에 동시에 영향을 준다.',
    biomechanicsNotes: {
      summary:
        '올바른 암 패스는 최대 외회전을 허용하면서도 어깨-팔꿈치에 부담을 최소화하는 경로다.',
      details: [
        '팔꿈치 높이: 어깨 라인과 동일하거나 약간 위 (shoulder height +10°).',
        '최대 외회전(MER): 엘리트 투수 평균 165–185°. 이 각도가 "loaded" 상태.',
        '"Arm lag"는 몸 회전에 뒤처지는 팔의 관성적 외회전으로 자연스러운 현상이다.',
        '팔꿈치가 너무 낮으면 (low elbow) 내측 UCL 스트레스가 급증한다.',
        '조기 내회전(early pronation)은 릴리스 포인트를 앞당겨 컨트롤을 저하시킨다.',
      ],
      musculatureInvolved: [
        'Infraspinatus / Teres minor (극하근, 소원근) — 외회전 조절',
        'Subscapularis (견갑하근) — 내회전 제어',
        'Serratus anterior (전거근) — 견갑골 안정',
        'Biceps brachii (이두근) — 팔꿈치 안정',
      ],
    },
    keyMetrics: [
      {
        label: '최대 외회전 (MER)',
        value: '165–185°',
        unit: '도',
        description: '릴리스 직전 최대 외회전 각도. 엘리트 기준.',
      },
      {
        label: '팔꿈치 높이',
        value: '어깨 ±10°',
        unit: '도',
        description: '어깨 라인 대비 팔꿈치 높이. 너무 낮으면 UCL 스트레스 증가.',
      },
    ],
    commonFaults: [
      {
        id: 'low-elbow',
        title: '낮은 팔꿈치 (Low Elbow)',
        description:
          '팔꿈치가 어깨 아래로 내려가면 UCL에 valgus 스트레스가 집중되어 부상 위험이 급증한다.',
        cues: [
          '팔꿈치를 어깨 높이로 유지',
          '"L" 모양을 만들어라',
          '어깨가 먼저 회전하지 않도록',
        ],
        drillIds: ['wrist-weight-drill', 'arm-path-wall-drill', 'reverse-throw-drill'],
      },
      {
        id: 'arm-wrap',
        title: '암 랩 (Arm Wrap)',
        description:
          '팔이 뒤로 너무 많이 감기면 MER이 과도해져 어깨 전방 관절에 부담을 주고 타이밍이 늦어진다.',
        cues: ['팔을 짧게 가져가라', '팔꿈치가 먼저 리드', '컴팩트한 암 액션'],
        drillIds: ['towel-drill', 'arm-path-wall-drill'],
      },
    ],
  },
  {
    id: 'acceleration',
    order: 6,
    name: 'Acceleration / Release Point',
    shortName: 'Release',
    icon: 'Flame',
    color: 'red',
    description:
      '가속 단계는 저장된 탄성 에너지가 공에 전달되는 순간이다. 릴리스 포인트의 일관성, 손가락 압력, 손목 플렉션이 구속과 컨트롤 모두에 결정적인 영향을 미친다. 이 단계는 약 50ms 이내의 매우 짧은 시간에 발생한다.',
    biomechanicsNotes: {
      summary:
        '릴리스 포인트 재현성이 컨트롤의 핵심이다. 구속보다 일관된 릴리스가 결과적으로 더 높은 수준의 투구를 만든다.',
      details: [
        '내회전 각속도 피크: 엘리트 투수 7,000–7,500°/s — 인체에서 가장 빠른 관절 운동.',
        '릴리스 포인트는 홈플레이트 방향으로 최대한 연장된 위치에서 이루어져야 한다.',
        '손가락 압력(finger pressure): 패스트볼은 검지+중지 끝에 집중, 각 구종마다 다름.',
        '손목 플렉션(wrist flexion)이 릴리스 직전 추가 가속을 제공한다.',
        '릴리스 각도가 구종을 결정 — 오버핸드/쓰리쿼터/사이드암.',
      ],
      musculatureInvolved: [
        'Anterior deltoid (전면 삼각근)',
        'Pectoralis major (대흉근)',
        'Subscapularis (견갑하근)',
        'Finger flexors (수지 굴근)',
        'Wrist flexors (수근 굴근)',
      ],
    },
    keyMetrics: [
      {
        label: '어깨 내회전 각속도',
        value: '7,000–7,500°/s',
        description: '릴리스 순간 어깨 내회전 속도. 인체 최대 관절 속도.',
      },
      {
        label: '릴리스 포인트 높이',
        value: '신장 × 0.8',
        description: '홈플레이트에서 측정한 릴리스 포인트 높이 기준.',
      },
      {
        label: '릴리스 연장 (Extension)',
        value: '홈방향 최대',
        description: '팔이 완전히 뻗어 홈플레이트 방향으로 연장되는 정도.',
      },
    ],
    commonFaults: [
      {
        id: 'inconsistent-release',
        title: '불일치 릴리스 포인트',
        description:
          '릴리스 포인트가 투구마다 달라지면 컨트롤이 근본적으로 흔들린다. 피로 시 더욱 심해진다.',
        cues: ['같은 포인트에서 릴리스하는 느낌을 반복', '팔 연장을 최대화', '손가락 끝에 집중'],
        drillIds: ['towel-drill', 'long-toss-progressive', 'plyo-ball-reverse'],
      },
      {
        id: 'short-arming',
        title: '숏 아밍 (Short-Arming)',
        description:
          '팔이 완전히 뻗지 않고 짧게 릴리스하면 구속과 움직임 모두 감소하고 팔꿈치에 더 큰 부담이 간다.',
        cues: ['홈을 향해 손가락을 뻗어라', '팔을 끝까지 연장', '팔로스루까지 이어라'],
        drillIds: ['towel-drill', 'reverse-throw-drill', 'long-toss-progressive'],
      },
    ],
  },
  {
    id: 'deceleration',
    order: 7,
    name: 'Deceleration / Follow-Through',
    shortName: 'Follow-Through',
    icon: 'Wind',
    color: 'teal',
    description:
      '감속은 가속만큼 중요하지만 종종 무시된다. 릴리스 이후 팔을 감속시키는 근육군이 적절히 작동하지 않으면 어깨 후면과 팔꿈치에 만성 부상이 발생한다. 좋은 팔로스루는 감속력을 분산시키고 다음 투구를 위한 회복을 돕는다.',
    biomechanicsNotes: {
      summary:
        '팔로스루는 "장식"이 아니라 감속 메커니즘이다. 팔로스루가 끊기면 그 에너지는 고스란히 어깨와 팔꿈치 관절이 흡수한다.',
      details: [
        '감속 단계에서 어깨 후면 근육군(후방 로테이터 커프)에 3–5배 체중의 편심력이 가해진다.',
        '팔로스루 중 트렁크 플렉션(trunk flexion)이 팔의 감속을 돕는다.',
        '팔이 반대쪽 엉덩이 앞까지 자연스럽게 지나가야 한다 (cross-body follow-through).',
        '팔로스루를 강제로 끊으면 디셀러레이터 근육이 더 많은 부하를 받는다.',
        '편심 근력 훈련 (eccentric loading)이 감속 능력 향상에 필수적이다.',
      ],
      musculatureInvolved: [
        'Posterior rotator cuff (후방 로테이터 커프)',
        'Teres major (대원근)',
        'Rhomboids (능형근)',
        'Triceps brachii (삼두근)',
        'Spinal erectors (척추기립근)',
      ],
    },
    keyMetrics: [
      {
        label: '팔로스루 완성도',
        value: '반대쪽 엉덩이까지',
        description: '팔이 반대쪽 엉덩이 앞을 지나야 충분한 감속이 이루어진다.',
      },
      {
        label: '트렁크 플렉션',
        value: '30–45°',
        unit: '도',
        description: '릴리스 후 상체가 전방으로 굴곡되는 각도. 감속에 기여.',
      },
    ],
    commonFaults: [
      {
        id: 'cut-off-followthrough',
        title: '팔로스루 조기 중단',
        description:
          '팔로스루가 중간에 끊기면 감속 에너지가 관절에 집중되어 만성 어깨/팔꿈치 부상의 주요 원인이 된다.',
        cues: [
          '팔이 반대쪽 힙을 지나도록',
          '자연스럽게 끝까지 따라가라',
          '팔꿈치가 무릎 쪽으로',
        ],
        drillIds: ['arm-care-eccentric', 'towel-drill', 'cross-body-stretch'],
      },
      {
        id: 'flying-open',
        title: '트렁크 조기 오픈 + 감속 실패',
        description:
          '릴리스 직후 트렁크가 너무 일찍 세워지면 팔의 감속 경로가 방해받아 후방 어깨에 충격이 집중된다.',
        cues: ['릴리스 후에도 앞으로 쏟아져라', '어깨가 홈을 향해 유지', '머리가 앞으로'],
        drillIds: ['arm-care-eccentric', 'hip-hinge-drill'],
      },
    ],
  },
];
