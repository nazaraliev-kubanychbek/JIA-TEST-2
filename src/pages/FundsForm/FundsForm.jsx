import { DescriptionSection } from "@components/index";
import { Form } from "./Form/Form";
import { useState } from "react";
import { ComplateForm } from "./ComplateForm/ComplateForm";

export const FundsForm = () => {
    const [complate, setComplate] = useState(false);
    return (
        <div style={{minHeight: '100vh'}}>
            <DescriptionSection text={'источники финансирования'} />
            {complate ? (<ComplateForm />) : (<Form complate={complate} setComplate={setComplate} />)}
            
        </div>
    );
}

