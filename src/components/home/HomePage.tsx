import { Target, BookOpen, Video, Zap } from 'lucide-react';
import { phases, drills } from '../../data';
import { PhaseCard } from './PhaseCard';

const features = [
  {
    icon: Zap,
    title: '7단계 페이즈 분석',
    desc: '와인드업부터 팔로스루까지 투구 동작을 7개 단계로 세분화',
  },
  {
    icon: BookOpen,
    title: '바이오메카닉스 기반',
    desc: '근육 활성화, 각속도, 분리각 등 과학적 지표와 함께 설명',
  },
  {
    icon: Video,
    title: '드릴 영상 직접 시청',
    desc: 'Tread Athletics, Driveline Baseball 영상을 앱 안에서 바로 재생',
  },
];

export function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8 space-y-10">
      {/* Hero */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gray-900 mb-2">
          <Target size={26} className="text-white" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
          Pitching Biomechanics
        </h1>
        <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
          Tread Athletics · Driveline Baseball의 드릴 영상을 투구 동작 7단계로 체계화한
          바이오메카닉스 레퍼런스
        </p>
        <div className="flex items-center justify-center gap-4 text-xs text-gray-400 pt-1">
          <span>{phases.length}개 페이즈</span>
          <span>·</span>
          <span>{drills.length}개 드릴</span>
          <span>·</span>
          <span>Tread + Driveline</span>
        </div>
      </div>

      {/* Feature chips */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {features.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="flex flex-col items-start gap-2 bg-white border border-gray-200 rounded-xl px-4 py-3"
          >
            <div className="w-8 h-8 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center">
              <Icon size={16} className="text-gray-600" />
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-900">{title}</p>
              <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Phase grid */}
      <div>
        <h2 className="text-sm font-semibold text-gray-900 mb-3">투구 7단계 페이즈</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {phases.map((phase) => (
            <PhaseCard key={phase.id} phase={phase} />
          ))}
        </div>
      </div>

      {/* Source credits */}
      <div className="border-t border-gray-200 pt-6">
        <p className="text-xs text-gray-400 text-center mb-3 font-medium uppercase tracking-wide">
          큐레이션 소스
        </p>
        <div className="flex items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-sm font-medium text-gray-700">Tread Athletics</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span className="text-sm font-medium text-gray-700">Driveline Baseball</span>
          </div>
        </div>
      </div>
    </div>
  );
}
