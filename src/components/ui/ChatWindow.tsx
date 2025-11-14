import EmptyChat from "./EmptyChat";

export default function ChatWindow() {
    return (
        <>
            <div className="hidden w-full min-h-full lg:block">
                <EmptyChat />
            </div>
        </>
    );
}
