import { WORLD_LIST } from "@/app/constants/WorldList";

export function generateStaticParams() {
    return WORLD_LIST.map((world) => ({
        world_id: String(world.id),
    }));
}

export default function WorldLayout({ children }: { children: React.ReactNode}) {
    return <>{children}</>
}