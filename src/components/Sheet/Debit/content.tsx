import { FC } from "react";
import * as S from "../styles";

interface ContentProps {
    priceTotal: string;
}

export const Content: FC<ContentProps> = ({
    priceTotal}) => {
    return (
        <S.Content>
            <S.ContainerLabels>
                <S.Label>Valor do Gasto</S.Label>
                <S.LabelReais>{priceTotal}</S.LabelReais>
            </S.ContainerLabels>
            <S.Label2>Agora só confirme abaixo para cadastrar o gasto</S.Label2>
        </S.Content>
    );
}