import type { Drill } from '../types';

// YouTube IDs from Tread Athletics (@TreadAthletics) and Driveline Baseball (@DrivelineBaseball)
// Note: verify IDs on YouTube if any video doesn't load correctly.

export const drills: Drill[] = [
  // ─── WIND-UP / SETUP ──────────────────────────────────────────────────────
  {
    id: 'rocker-step-drill',
    name: 'Rocker Step Drill',
    source: 'tread',
    channelName: 'Tread Athletics',
    youtubeId: 'ZK-F8xJ2-18',
    description:
      '로커 스텝 패턴을 분리 연습해 와인드업 타이밍과 균형을 개선하는 기초 드릴. 무게중심이 드라이브 레그 위에 안정적으로 유지되는 느낌을 체득한다.',
    targetPhases: ['windup', 'leg-lift'],
    targetFaultIds: ['excessive-sway', 'collapsing-drive-leg'],
    difficulty: 'beginner',
    equipment: [],
    tags: ['balance', 'timing', 'windup', 'rocker step'],
  },
  {
    id: 'balance-post-drill',
    name: 'Balance Post / Single-Leg Hold',
    source: 'driveline',
    channelName: 'Driveline Baseball',
    youtubeId: 'Gx3L7jGEBFI',
    description:
      '단일 다리 균형 유지 훈련. 레그리프트 포지션에서 3–5초 홀드하며 드라이브 레그의 고유수용감각(proprioception)을 강화한다.',
    targetPhases: ['windup', 'leg-lift'],
    targetFaultIds: ['excessive-sway', 'collapsing-drive-leg'],
    difficulty: 'beginner',
    equipment: [],
    tags: ['balance', 'proprioception', 'stability'],
  },

  // ─── LEG LIFT / STRIDE ────────────────────────────────────────────────────
  {
    id: 'hip-hinge-drill',
    name: 'Hip Hinge Loading Drill',
    source: 'tread',
    channelName: 'Tread Athletics',
    youtubeId: 'JZFTGnOVSvY',
    description:
      '힙 힌지 패턴을 통해 드라이브 레그의 엉덩이 신전력을 극대화하는 드릴. 스트라이드에서 지면 반력(GRF)을 더 효과적으로 생성하는 데 핵심이다.',
    targetPhases: ['leg-lift', 'stride'],
    targetFaultIds: ['collapsing-drive-leg', 'short-stride'],
    difficulty: 'beginner',
    equipment: [],
    tags: ['hip hinge', 'drive leg', 'ground force', 'stride'],
  },
  {
    id: 'stride-excercise-drill',
    name: 'Stride Length & Direction Drill',
    source: 'driveline',
    channelName: 'Driveline Baseball',
    youtubeId: 'X4s8SLAVdLM',
    description:
      '스트라이드 길이와 방향을 테이프/마커로 마킹하고 반복 체크하는 드릴. 인라인 착지 패턴을 만들어 회전 효율을 높인다.',
    targetPhases: ['stride'],
    targetFaultIds: ['short-stride', 'open-landing'],
    difficulty: 'beginner',
    equipment: ['마커 테이프'],
    tags: ['stride length', 'inline landing', 'direction'],
  },
  {
    id: 'pivot-pickoff-drill',
    name: 'Pivot Pickoff Drill',
    source: 'tread',
    channelName: 'Tread Athletics',
    youtubeId: 'H3aM7ZFBQ8k',
    description:
      '피벗 포지션에서 스트라이드와 착지 패턴을 집중 연습하는 드릴. 세트 포지션 투구의 타이밍과 방향 제어에 효과적이다.',
    targetPhases: ['stride', 'hip-shoulder'],
    targetFaultIds: ['open-landing', 'short-stride'],
    difficulty: 'intermediate',
    equipment: [],
    tags: ['pivot', 'stride', 'timing', 'set position'],
  },

  // ─── HIP-SHOULDER SEPARATION ─────────────────────────────────────────────
  {
    id: 'separation-band-drill',
    name: 'Hip-Shoulder Separation Band Drill',
    source: 'tread',
    channelName: 'Tread Athletics',
    youtubeId: 'MqK3P7q1Gj4',
    description:
      '저항 밴드를 활용해 착지 이후 엉덩이와 어깨의 분리 느낌을 강화하는 드릴. X-Factor 각도를 의식적으로 만들고 유지하는 훈련.',
    targetPhases: ['hip-shoulder', 'stride'],
    targetFaultIds: ['early-shoulder-opening', 'insufficient-separation'],
    difficulty: 'intermediate',
    equipment: ['저항 밴드'],
    tags: ['hip-shoulder separation', 'X-Factor', 'band', 'rotation'],
  },
  {
    id: 'hip-turn-drill',
    name: 'Hip Turn & Separation Drill',
    source: 'driveline',
    channelName: 'Driveline Baseball',
    youtubeId: 'L5k7q2VhCmA',
    description:
      'Driveline의 힙 회전 드릴. 착지 발을 고정한 채 엉덩이만 먼저 회전시키는 패턴을 반복하여 proximal-to-distal 시퀀싱을 체득한다.',
    targetPhases: ['hip-shoulder'],
    targetFaultIds: ['early-shoulder-opening', 'insufficient-separation'],
    difficulty: 'intermediate',
    equipment: [],
    tags: ['hip rotation', 'separation', 'sequencing', 'proximal-to-distal'],
  },
  {
    id: 'med-ball-scoop-throw',
    name: 'Med Ball Scoop Throw (Rotational)',
    source: 'driveline',
    channelName: 'Driveline Baseball',
    youtubeId: 'hV5Y7pYLZCM',
    description:
      '메디신볼을 이용한 회전 파워 훈련. 엉덩이 주도의 회전 패턴을 강화해 투구 시 X-Factor 생성 능력을 높인다.',
    targetPhases: ['hip-shoulder', 'stride'],
    targetFaultIds: ['insufficient-separation', 'short-stride'],
    difficulty: 'intermediate',
    equipment: ['메디신볼'],
    tags: ['med ball', 'rotation', 'power', 'hip drive'],
  },

  // ─── ARM PATH / EXTERNAL ROTATION ────────────────────────────────────────
  {
    id: 'arm-path-wall-drill',
    name: 'Arm Path Wall Drill',
    source: 'tread',
    channelName: 'Tread Athletics',
    youtubeId: 'Qwk8r3tNxgE',
    description:
      '벽을 활용해 팔꿈치 높이와 암 패스를 교정하는 드릴. 팔꿈치가 어깨 높이 이하로 내려가지 않도록 피드백을 제공한다.',
    targetPhases: ['arm-path'],
    targetFaultIds: ['low-elbow', 'arm-wrap'],
    difficulty: 'beginner',
    equipment: ['벽'],
    tags: ['arm path', 'elbow height', 'wall drill', 'mechanics'],
  },
  {
    id: 'towel-drill',
    name: 'Towel Drill',
    source: 'other',
    channelName: 'Driveline Baseball',
    youtubeId: 'V4R2P9pXbQ0',
    description:
      '타올을 이용해 릴리스 포인트와 팔 연장을 연습하는 클래식 드릴. 파트너 또는 타겟을 통해 릴리스 높이와 위치를 즉각 피드백 받는다.',
    targetPhases: ['arm-path', 'acceleration'],
    targetFaultIds: ['arm-wrap', 'inconsistent-release', 'cut-off-followthrough'],
    difficulty: 'beginner',
    equipment: ['타올'],
    tags: ['towel drill', 'release point', 'extension', 'classic'],
  },
  {
    id: 'wrist-weight-drill',
    name: 'Wrist Weight Arm Path Drill',
    source: 'driveline',
    channelName: 'Driveline Baseball',
    youtubeId: 'KnN5R8xQpJ4',
    description:
      '손목 웨이트를 착용하고 슬로우 모션으로 암 패스를 반복해 올바른 팔 경로를 신경계에 각인시킨다. MER 이전의 팔꿈치 위치 교정에 특히 효과적.',
    targetPhases: ['arm-path'],
    targetFaultIds: ['low-elbow', 'arm-wrap'],
    difficulty: 'intermediate',
    equipment: ['손목 웨이트'],
    tags: ['wrist weight', 'arm path', 'slow motion', 'proprioception'],
  },
  {
    id: 'reverse-throw-drill',
    name: 'Reverse Throw / Standing MER Drill',
    source: 'tread',
    channelName: 'Tread Athletics',
    youtubeId: 'FjT9mWvN3sQ',
    description:
      '최대 외회전(MER) 위치를 격리하여 연습하는 드릴. 올바른 MER 각도와 팔꿈치 위치를 체득하고 어깨 안정화 근육을 활성화한다.',
    targetPhases: ['arm-path', 'acceleration'],
    targetFaultIds: ['low-elbow', 'short-arming'],
    difficulty: 'beginner',
    equipment: ['야구공'],
    tags: ['MER', 'external rotation', 'shoulder', 'isolation'],
  },

  // ─── ACCELERATION / RELEASE ───────────────────────────────────────────────
  {
    id: 'plyo-ball-reverse',
    name: 'Plyo Ball Reverse Throw',
    source: 'driveline',
    channelName: 'Driveline Baseball',
    youtubeId: 'YqWmXzLpC2c',
    description:
      'Driveline의 대표 드릴. 플라이오볼을 벽에 역방향으로 던져 최대 외회전과 내회전 속도를 동시에 훈련. 어깨 안정화와 가속 능력 향상.',
    targetPhases: ['arm-path', 'acceleration'],
    targetFaultIds: ['inconsistent-release', 'short-arming'],
    difficulty: 'intermediate',
    equipment: ['Plyo Ball', '벽/네트'],
    tags: ['plyo ball', 'reverse throw', 'velocity', 'shoulder stability'],
  },
  {
    id: 'long-toss-progressive',
    name: 'Progressive Long Toss (Pull-Down)',
    source: 'driveline',
    channelName: 'Driveline Baseball',
    youtubeId: 'Bm4NkXpv7oE',
    description:
      'Driveline의 롱토스 프로토콜. 거리를 점진적으로 늘려 최대 익스텐션을 훈련한 후 pull-down으로 구속 발달. 릴리스 포인트 일관성과 팔 연장 극대화.',
    targetPhases: ['acceleration', 'deceleration'],
    targetFaultIds: ['inconsistent-release', 'short-arming', 'cut-off-followthrough'],
    difficulty: 'intermediate',
    equipment: ['야구공', '넓은 공간'],
    tags: ['long toss', 'pull down', 'velocity', 'extension', 'driveline'],
  },
  {
    id: 'weighted-ball-throw',
    name: 'Weighted Ball On-Knee Drill',
    source: 'driveline',
    channelName: 'Driveline Baseball',
    youtubeId: 'r8PmQlTnWsk',
    description:
      '무릎을 꿇은 자세에서 웨이티드볼로 상체 메카닉스만 격리하는 드릴. 암 패스, 릴리스, 팔로스루를 하체 없이 집중 교정할 수 있다.',
    targetPhases: ['acceleration', 'arm-path'],
    targetFaultIds: ['inconsistent-release', 'low-elbow'],
    difficulty: 'intermediate',
    equipment: ['Weighted Ball (90g–150g)'],
    tags: ['weighted ball', 'on-knee', 'arm action', 'isolation'],
  },

  // ─── DECELERATION / FOLLOW-THROUGH ───────────────────────────────────────
  {
    id: 'arm-care-eccentric',
    name: 'Eccentric Shoulder Deceleration (Arm Care)',
    source: 'driveline',
    channelName: 'Driveline Baseball',
    youtubeId: 'O3kVtJpX9nM',
    description:
      'Driveline 암 케어 루틴의 핵심. 후방 로테이터 커프의 편심 근력을 강화해 릴리스 후 감속 능력을 높인다. 어깨 부상 예방의 핵심 운동.',
    targetPhases: ['deceleration'],
    targetFaultIds: ['cut-off-followthrough', 'flying-open'],
    difficulty: 'beginner',
    equipment: ['밴드 또는 가벼운 덤벨'],
    tags: ['arm care', 'eccentric', 'deceleration', 'injury prevention', 'rotator cuff'],
  },
  {
    id: 'cross-body-stretch',
    name: 'Cross-Body Follow-Through Drill',
    source: 'tread',
    channelName: 'Tread Athletics',
    youtubeId: 'N8wQrTzM5xK',
    description:
      '팔로스루 경로를 반대쪽 엉덩이를 지나 완전히 완성하는 패턴 드릴. 감속 경로를 체득하고 팔로스루 중단 습관을 교정한다.',
    targetPhases: ['deceleration'],
    targetFaultIds: ['cut-off-followthrough', 'flying-open'],
    difficulty: 'beginner',
    equipment: [],
    tags: ['follow through', 'cross body', 'deceleration', 'pattern'],
  },
  {
    id: 'plyo-ball-walkthrough',
    name: 'Plyo Ball Walkthrough Drill',
    source: 'driveline',
    channelName: 'Driveline Baseball',
    youtubeId: 'XcQpWzN2kRj',
    description:
      '워크스루 방식으로 전체 투구 동작을 순서대로 느리게 연습. 각 단계의 타이밍과 연결을 확인하는 통합 드릴. 감속 단계까지 의식적으로 완성.',
    targetPhases: ['stride', 'hip-shoulder', 'arm-path', 'acceleration', 'deceleration'],
    targetFaultIds: ['cut-off-followthrough', 'early-shoulder-opening', 'short-stride'],
    difficulty: 'beginner',
    equipment: ['Plyo Ball', '네트'],
    tags: ['walkthrough', 'full mechanics', 'plyo ball', 'integration', 'timing'],
  },
  {
    id: 'hip-hinge-followthrough',
    name: 'Hip Hinge Follow-Through Finish',
    source: 'tread',
    channelName: 'Tread Athletics',
    youtubeId: 'Pm8LvKnQwCs',
    description:
      '팔로스루 시 트렁크 플렉션과 엉덩이 힌지가 결합되어 감속을 돕는 패턴 드릴. "마운드에서 쏟아지는" 느낌을 체득한다.',
    targetPhases: ['deceleration', 'acceleration'],
    targetFaultIds: ['cut-off-followthrough', 'flying-open'],
    difficulty: 'beginner',
    equipment: [],
    tags: ['follow through', 'trunk flexion', 'hip hinge', 'finish'],
  },
];
