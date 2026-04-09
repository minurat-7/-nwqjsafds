import type { Drill } from '../types';

// All YouTube IDs verified via YouTube oEmbed API.
// Format: youtubeId | "Actual Title" | Channel

export const drills: Drill[] = [
  // ─── WIND-UP / SETUP ──────────────────────────────────────────────────────
  {
    id: 'rocker-step-drill',
    name: 'Rocker Drill Tips and Mistakes For Pitchers',
    source: 'tread',
    channelName: 'Tread Athletics',
    youtubeId: 'h5y4h2qDQ2g',
    description:
      '로커 스텝의 흔한 실수와 올바른 패턴을 집중 분석. 와인드업 타이밍과 무게중심 유지를 개선하며, 재현성 높은 셋업 동작을 만든다.',
    targetPhases: ['windup', 'leg-lift'],
    targetFaultIds: ['excessive-sway', 'collapsing-drive-leg'],
    difficulty: 'beginner',
    equipment: [],
    tags: ['rocker step', 'balance', 'timing', 'windup'],
  },
  {
    id: 'balance-post-drill',
    name: 'How to Use Plyo Balls for Improving Mechanics',
    source: 'driveline',
    channelName: 'Driveline Baseball',
    youtubeId: 'SLlLp_ijkU4',
    description:
      'Driveline의 플라이오볼 메카닉스 개선 가이드. 레그리프트와 밸런스 포인트에서 올바른 몸통 정렬을 체득하며, 투구 동작 전체의 기초를 쌓는다.',
    targetPhases: ['windup', 'leg-lift'],
    targetFaultIds: ['excessive-sway', 'collapsing-drive-leg'],
    difficulty: 'beginner',
    equipment: ['PlyoCare Ball'],
    tags: ['plyo ball', 'balance', 'mechanics', 'driveline'],
  },

  // ─── LEG LIFT / STRIDE ────────────────────────────────────────────────────
  {
    id: 'hip-hinge-drill',
    name: 'Re-thinking How the Back Hip Works Into Landing',
    source: 'tread',
    channelName: 'Tread Athletics',
    youtubeId: 'Rbk2-UNAMgw',
    description:
      '착지 시 뒷 엉덩이(back hip) 작동 방식을 재정의하는 Tread Athletics 영상. 힙 힌지 패턴을 통해 지면 반력(GRF)을 극대화하고 드라이브 레그 파워를 키운다.',
    targetPhases: ['leg-lift', 'stride'],
    targetFaultIds: ['collapsing-drive-leg', 'short-stride'],
    difficulty: 'beginner',
    equipment: [],
    tags: ['hip hinge', 'back hip', 'landing', 'drive leg', 'ground force'],
  },
  {
    id: 'stride-excercise-drill',
    name: 'Pivot Picks: How to Improve Your Mechanics',
    source: 'driveline',
    channelName: 'Driveline Baseball',
    youtubeId: '5s_XH6_8Idk',
    description:
      'Driveline의 피벗 픽스 개선 드릴. 스트라이드 방향과 착지 패턴을 반복 훈련해 인라인 착지와 타이밍을 동시에 교정한다.',
    targetPhases: ['stride'],
    targetFaultIds: ['short-stride', 'open-landing'],
    difficulty: 'beginner',
    equipment: [],
    tags: ['pivot picks', 'stride', 'landing', 'direction', 'driveline'],
  },
  {
    id: 'pivot-pickoff-drill',
    name: 'How To IMMEDIATELY Become A Better Pitcher',
    source: 'tread',
    channelName: 'Tread Athletics',
    youtubeId: 'Av3KCRxQ47M',
    description:
      'Tread Athletics의 즉각적 투구 개선 핵심 영상. 피벗 포지션에서 스트라이드와 착지 패턴을 교정하며, 타이밍과 방향 제어 능력을 빠르게 높인다.',
    targetPhases: ['stride', 'hip-shoulder'],
    targetFaultIds: ['open-landing', 'short-stride'],
    difficulty: 'intermediate',
    equipment: [],
    tags: ['stride', 'timing', 'mechanics', 'pivot'],
  },

  // ─── HIP-SHOULDER SEPARATION ─────────────────────────────────────────────
  {
    id: 'separation-band-drill',
    name: 'Throw Harder: Hip-Shoulder Separation Full Routine',
    source: 'tread',
    channelName: 'Tread Athletics',
    youtubeId: 'KHenXJxkm3Q',
    description:
      'Tread Athletics의 힙-숄더 세퍼레이션 전체 루틴. X-Factor 각도를 의식적으로 만들고 유지하는 훈련으로, 탄성 에너지 저장 능력을 체계적으로 발달시킨다.',
    targetPhases: ['hip-shoulder', 'stride'],
    targetFaultIds: ['early-shoulder-opening', 'insufficient-separation'],
    difficulty: 'intermediate',
    equipment: [],
    tags: ['hip-shoulder separation', 'X-Factor', 'rotation', 'full routine'],
  },
  {
    id: 'hip-turn-drill',
    name: 'Do This Drill If You Struggle With Early Torso Rotation',
    source: 'driveline',
    channelName: 'Driveline Baseball',
    youtubeId: 'FQjVUqhouJI',
    description:
      'Driveline의 조기 몸통 회전 교정 드릴. 착지 발이 고정된 채 엉덩이만 먼저 회전시키는 패턴을 반복해 proximal-to-distal 시퀀싱을 체득한다.',
    targetPhases: ['hip-shoulder'],
    targetFaultIds: ['early-shoulder-opening', 'insufficient-separation'],
    difficulty: 'intermediate',
    equipment: [],
    tags: ['early rotation', 'hip rotation', 'sequencing', 'torso'],
  },
  {
    id: 'med-ball-scoop-throw',
    name: 'Hip-Shoulder Separation Explained',
    source: 'tread',
    channelName: 'Tread Athletics',
    youtubeId: '1TleQH6Dpew',
    description:
      'Tread Athletics의 힙-숄더 세퍼레이션 심층 설명. 분리각의 바이오메카닉스와 실전 드릴을 함께 다루며, X-Factor 생성 메커니즘을 완전히 이해한다.',
    targetPhases: ['hip-shoulder', 'stride'],
    targetFaultIds: ['insufficient-separation', 'early-shoulder-opening'],
    difficulty: 'beginner',
    equipment: [],
    tags: ['hip-shoulder separation', 'X-Factor', 'explanation', 'biomechanics'],
  },

  // ─── ARM PATH / EXTERNAL ROTATION ────────────────────────────────────────
  {
    id: 'arm-path-wall-drill',
    name: '6 Drills To Throw Harder By Fixing Your Arm Action',
    source: 'tread',
    channelName: 'Tread Athletics',
    youtubeId: 'crXYs7EfnDc',
    description:
      'Tread Athletics의 암 액션 교정 6드릴. 팔꿈치 높이와 암 패스를 단계별로 교정하며, 팔꿈치가 어깨 라인 아래로 내려가지 않는 올바른 패턴을 만든다.',
    targetPhases: ['arm-path'],
    targetFaultIds: ['low-elbow', 'arm-wrap'],
    difficulty: 'beginner',
    equipment: [],
    tags: ['arm action', 'elbow height', 'arm path', '6 drills'],
  },
  {
    id: 'towel-drill',
    name: 'Pivot Pickoff Throws - High-Speed Analysis',
    source: 'driveline',
    channelName: 'Driveline Baseball',
    youtubeId: 'juRVAZEBazI',
    description:
      'Driveline의 피벗 픽오프 투구 하이스피드 분석. 릴리스 포인트와 팔 연장을 슬로모션으로 확인하며, 암 패스와 팔로스루 패턴을 교정한다.',
    targetPhases: ['arm-path', 'acceleration'],
    targetFaultIds: ['arm-wrap', 'inconsistent-release', 'cut-off-followthrough'],
    difficulty: 'beginner',
    equipment: [],
    tags: ['pivot pickoff', 'release point', 'high speed', 'arm action'],
  },
  {
    id: 'wrist-weight-drill',
    name: 'Supramaximal Training with Weighted Baseballs',
    source: 'driveline',
    channelName: 'Driveline Baseball',
    youtubeId: 'W84Am7RjvgQ',
    description:
      '웨이티드볼 수프라맥시멀 훈련. 고중량 야구공으로 암 패스와 MER 각도를 강화하며, 신경계에 올바른 팔 경로를 각인시킨다.',
    targetPhases: ['arm-path'],
    targetFaultIds: ['low-elbow', 'arm-wrap'],
    difficulty: 'intermediate',
    equipment: ['Weighted Baseball'],
    tags: ['weighted ball', 'supramaximal', 'arm path', 'velocity'],
  },
  {
    id: 'reverse-throw-drill',
    name: 'Arm Action Basics: Capturing Momentum',
    source: 'tread',
    channelName: 'Tread Athletics',
    youtubeId: 'q26Zim1J-8c',
    description:
      'Tread Athletics의 암 액션 기초와 모멘텀 포착. 레이트 암 패턴을 교정하고 최대 외회전(MER) 위치를 체득하며 팔꿈치 높이를 올바르게 설정한다.',
    targetPhases: ['arm-path', 'acceleration'],
    targetFaultIds: ['low-elbow', 'short-arming'],
    difficulty: 'beginner',
    equipment: [],
    tags: ['arm action', 'momentum', 'MER', 'external rotation', 'basics'],
  },

  // ─── ACCELERATION / RELEASE ───────────────────────────────────────────────
  {
    id: 'plyo-ball-reverse',
    name: 'PlyoCare Reverse Throws',
    source: 'driveline',
    channelName: 'Driveline Baseball',
    youtubeId: 'sP5v9lUso8U',
    description:
      'Driveline의 대표 드릴. 플라이오볼을 벽에 역방향으로 던져 최대 외회전·내회전 속도를 동시에 훈련. 어깨 안정화와 릴리스 가속 능력을 동시에 향상시킨다.',
    targetPhases: ['arm-path', 'acceleration'],
    targetFaultIds: ['inconsistent-release', 'short-arming'],
    difficulty: 'intermediate',
    equipment: ['PlyoCare Ball', '벽/네트'],
    tags: ['plyo ball', 'reverse throw', 'velocity', 'shoulder stability', 'plyocare'],
  },
  {
    id: 'long-toss-progressive',
    name: 'A Better Way to Long Toss',
    source: 'driveline',
    channelName: 'Driveline Baseball',
    youtubeId: 'eNRKWYeB-Us',
    description:
      'Driveline의 롱토스 개선 방법. 거리를 점진적으로 늘려 최대 익스텐션을 훈련한 후 풀다운으로 전환. 릴리스 포인트 일관성과 팔 연장을 극대화한다.',
    targetPhases: ['acceleration', 'deceleration'],
    targetFaultIds: ['inconsistent-release', 'short-arming', 'cut-off-followthrough'],
    difficulty: 'intermediate',
    equipment: ['야구공', '넓은 공간'],
    tags: ['long toss', 'pull down', 'velocity', 'extension', 'release point'],
  },
  {
    id: 'weighted-ball-throw',
    name: "Ryan Castellani's Weighted Ball Mound Work",
    source: 'driveline',
    channelName: 'Driveline Baseball',
    youtubeId: 'OUJhMhDj6xY',
    description:
      'Driveline 프로 투수의 웨이티드볼 마운드 훈련. 마운드 위에서 상체 메카닉스를 격리하여 암 패스, 릴리스, 팔로스루를 실전 환경으로 교정한다.',
    targetPhases: ['acceleration', 'arm-path'],
    targetFaultIds: ['inconsistent-release', 'low-elbow'],
    difficulty: 'intermediate',
    equipment: ['Weighted Baseball', '마운드'],
    tags: ['weighted ball', 'mound work', 'arm action', 'pro drill'],
  },

  // ─── DECELERATION / FOLLOW-THROUGH ───────────────────────────────────────
  {
    id: 'arm-care-eccentric',
    name: '5 Arm Care / Recovery Tools for Pitchers',
    source: 'driveline',
    channelName: 'Driveline Baseball',
    youtubeId: 'Nn6GHBTBJMc',
    description:
      'Driveline의 투수 암 케어 & 회복 5가지 도구. 후방 로테이터 커프의 편심 근력을 강화해 릴리스 후 감속 능력을 높이고 어깨 부상을 예방한다.',
    targetPhases: ['deceleration'],
    targetFaultIds: ['cut-off-followthrough', 'flying-open'],
    difficulty: 'beginner',
    equipment: ['밴드', '폼롤러'],
    tags: ['arm care', 'recovery', 'deceleration', 'injury prevention', 'rotator cuff'],
  },
  {
    id: 'cross-body-stretch',
    name: 'Top 3 Drills to DOMINATE as a Pitcher',
    source: 'tread',
    channelName: 'Tread Athletics',
    youtubeId: 'ScQVwIOgmlE',
    description:
      'Tread Athletics의 투수 지배력 향상 3대 드릴. 팔로스루 경로 완성과 감속 패턴을 체득하며, 전체 투구 사이클을 통합하는 고급 훈련이다.',
    targetPhases: ['deceleration'],
    targetFaultIds: ['cut-off-followthrough', 'flying-open'],
    difficulty: 'intermediate',
    equipment: [],
    tags: ['follow through', 'deceleration', 'dominate', 'full mechanics'],
  },
  {
    id: 'plyo-ball-walkthrough',
    name: 'Throwing the Green Driveline Plyo Ball',
    source: 'driveline',
    channelName: 'Driveline Baseball',
    youtubeId: 'U8ueqTWKNAM',
    description:
      'Driveline 그린 플라이오볼 실전 사용법. 전체 투구 동작을 통합해 각 단계의 타이밍과 연결을 확인하는 통합 드릴. 감속 단계까지 의식적으로 완성.',
    targetPhases: ['stride', 'hip-shoulder', 'arm-path', 'acceleration', 'deceleration'],
    targetFaultIds: ['cut-off-followthrough', 'early-shoulder-opening', 'short-stride'],
    difficulty: 'beginner',
    equipment: ['PlyoCare Ball (Green)', '네트'],
    tags: ['plyo ball', 'green', 'full mechanics', 'integration', 'timing'],
  },
  {
    id: 'hip-hinge-followthrough',
    name: 'Do This Drill If You Struggle With Early Torso Rotation',
    source: 'driveline',
    channelName: 'Driveline Baseball',
    youtubeId: 'FQjVUqhouJI',
    description:
      '팔로스루 시 트렁크 플렉션과 힙 힌지가 결합되는 패턴. 조기 몸통 열림을 방지하고 릴리스 이후 감속 경로가 자연스럽게 완성되도록 훈련한다.',
    targetPhases: ['deceleration', 'acceleration'],
    targetFaultIds: ['cut-off-followthrough', 'flying-open'],
    difficulty: 'beginner',
    equipment: [],
    tags: ['follow through', 'early rotation', 'trunk', 'finish'],
  },
];
