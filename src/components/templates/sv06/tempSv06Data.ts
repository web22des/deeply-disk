// src/components/templates/sv06/tempSv06Data.ts
import type { TitleV01Props } from "@components/ui/title/TitleV01.astro";
import type { Props as CardProps } from "@components/ui/card/Cv05.astro";
import {
    cards,
    type Props as Sv06Props,
} from "@components/templates/sv06/Sv06.astro";

export interface Props {
    title: TitleV01Props;

    card: CardProps;
}

const titleData: TitleV01Props = {
    title: "lazdkfgja",
    subtitle: "aslkejg",
};

export const test200Data: Sv06Props = {
    headTitle: titleData,
};
