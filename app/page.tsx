import { DynamicConnect } from '@/components/dynamic/DynamicConnect';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <DynamicConnect />
      <PrivyConnect/>
    </main>
  );
}
