import { Button } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";
import {
    Filter
} from "@components/Filter";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { ListEmpty } from "@components/ListEmpty";
import { PlayerCard } from "@components/PlayerCard";
import { useRoute } from "@react-navigation/native";
import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO";
import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { playersGetByGroupAndTeam } from "@storage/player/playerGetByGroupAndTeam";
import { AppError } from "@utils/AppError";
import { useEffect, useRef, useState } from "react";
import { Alert, FlatList, Keyboard, TextInput } from "react-native";
import * as S from "./style";
import { playersDeleteByGroup } from "@storage/player/playerDeleteByGroup";

type RouteParams = {
    group: string;
}

export function Players() {
    const [newPlayerName, setNewPlayerName] = useState('');
    const [team, setTeam] = useState('Time A');
    const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

    const route = useRoute();

    const { group } = route.params as RouteParams;

    const newPlayerNameInputRef = useRef<TextInput>(null);

    async function handleAddPlayer() {
        if (newPlayerName.trim().length === 0) {
            return Alert.alert('Novo Jogador', 'Informe o nome da pessoa para adicionar');
        }

        const newPlayer = {
            name: newPlayerName,
            team
        }

        try {
            await playerAddByGroup({ newPlayer, group });
            fetchPlayersByTeam();
            // utilizando linha abaixo para retirar o foco da caixa de texto
            // e fechar ela automaticamente 
            //newPlayerNameInputRef.current?.blur();
            Keyboard.dismiss();
            setNewPlayerName('');
        } catch (error) {
            if (error instanceof AppError) {
                Alert.alert('Novo Jogador', error.message);
            } else {
                console.log(error);
                Alert.alert('Novo Jogador', 'Não foi possivel adicionar');
            }
        }
    }

    async function fetchPlayersByTeam() {
        try {
            const playersByTeam = await playersGetByGroupAndTeam(group, team);
            setPlayers(playersByTeam);
        } catch (error) {
            console.log(error);
            Alert.alert('Pessoas', 'Não foi possivel carregar as pessoas do time selecionado');
        }
    }

    async function handleRemovePlayer(playerName: string){
       try {      
          Alert.alert(
            'Remover jogador',
            `Tem certeza de que deseja remover ${playerName}?`,
            [
                {
                    text: "Sim",
                    style: "destructive",
                    onPress: async ()=> { 
                        await playersDeleteByGroup({group, playerName});
                        fetchPlayersByTeam()
                    }
                },
                {
                    text: "Não",
                    style: "cancel"
                }
            ]
          )
          
       } catch (error) {
         console.log(error);
         Alert.alert('Remover Player', 'Não foi possivel remover esse jogador');
       }
    }

    useEffect(()=> {
        fetchPlayersByTeam();
    },[team]);

    return (
        <>
            <S.Container>
                <Header showBackButton />
                <Highlight
                    title={group}
                    subtitle="adicione a galera e separe os times"
                />
                <S.Form>
                    <Input
                        inputRef={newPlayerNameInputRef}
                        placeholder="Nome da pessoa"
                        autoCorrect={false}
                        onChangeText={setNewPlayerName}
                        value={newPlayerName}
                        onSubmitEditing={handleAddPlayer}
                        returnKeyType="default"
                    />
                    <ButtonIcon icon="add" onPress={handleAddPlayer} />
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

                    <S.NumberOfPlayers>
                        {players.length}
                    </S.NumberOfPlayers>
                </S.HeaderList>

                <FlatList
                    data={players}
                    keyExtractor={item => item.name}
                    renderItem={({ item }) => (
                        <PlayerCard
                            name={item.name}
                            onRemove={() => handleRemovePlayer(item.name)}
                        />
                    )}
                    ListEmptyComponent={() => (
                        <ListEmpty message="Não há pessoas nesse time." />
                    )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={[
                        { paddingBottom: 100 },
                        players.length === 0 && { flex: 1 }
                    ]}
                />
                <Button
                    title="Remover Turma"
                    type="SECONDARY"
                />
            </S.Container>
        </>
    )
}