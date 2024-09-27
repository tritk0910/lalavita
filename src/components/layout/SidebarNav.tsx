import { cn } from "@/lib/utils";

export default function SidebarNav({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 w-fit fixed right-0 translate-y-[50%] h-full pr-10 md:pr-20",
        className
      )}
    >
      <div className="size-2 bg-[#42c0cc] rounded-full" />
      <div className="size-2 bg-[#d9d9d9] rounded-full" />
      <div className="size-2 bg-[#d9d9d9] rounded-full" />
      <div className="size-2 bg-[#d9d9d9] rounded-full" />
      <div className="size-2 bg-[#d9d9d9] rounded-full" />
    </div>
  );
}
