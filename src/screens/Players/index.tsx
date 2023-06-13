import { FlatList } from "react-native";
import { useState } from "react";
import { Header } from "@components/Header";
import * as S from "./style";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import {
    Filter
} from "@components/Filter";
import { PlayerCard } from "@components/PlayerCard";


export function Players() {
    const [team, setTeam] = useState('Time A');
    const [players, setPlayers] = useState(['Beatriz', 'Joao', 'Roberto']);

    return (
        <>
            <S.Container>
                <Header showBackButton />
                <Highlight
                    title="Nome da turma"
                    subtitle="adicione a galera e separe os times"
                />
                <S.Form>
                    <Input
                        placeholder="Nome da pessoa"
                        autoCorrect={false}
                    />
                    <ButtonIcon icon="add" />
                </S.Form>

                <S.HeaderList>
                    <FlatList
                        data={['Time A', 'Time B']}
                        keyExtractor={item => item}
                        renderItem={({ item }) => (
                            <Filter
                                title={item}
                                isActive={item === team}
                                onPress={() => setTeam(item)}
                            />
                        )}
                        horizontal
                    />

                    <S.NumbersOffPlayers>
                        {players.length}
                    </S.NumbersOffPlayers>
                </S.HeaderList>

                <FlatList
                    data={players}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <PlayerCard
                            name={item}
                            onRemove={() => { }}
                        />
                    )}
                />
            </S.Container>
        </>
    )
}