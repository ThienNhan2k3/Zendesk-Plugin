import { useMemo } from "react";
import { useAppStore } from "../stores";
import { AppLocation } from "../interfaces/app-data";
import TicketSidebarContainer from "../modules/TicketSidebarContainer/TicketSideContainer";
import TicketEditorContainer from "../modules/TicketEditorContainer/TicketEditorContainer";
import AdminContainer from "../modules/AdminContainer/AdminContainer";


export default function AppRouter() : JSX.Element {
    const location = useAppStore((state) => state.location);  

    const renderElement = useMemo(() => {
        if (location === AppLocation.TICKET_SIDEBAR) {
            return <TicketSidebarContainer />
        } else if (location === AppLocation.TICKET_EDITOR) {
            return <TicketEditorContainer />
        } else {
            return <AdminContainer />
        }
    }, [location]);
    console.log("renderElement:::", renderElement);
    return (
        <>
            {renderElement}
        </>
    );
}