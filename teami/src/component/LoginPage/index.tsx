import styled from "@emotion/styled";
import React from 'react';
import { Title } from 'component/Title';
import {CustomLabel} from 'component/Label';
import { Button } from "../Button";
import {ClickLabel} from "../ClickLabel";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #6868AC;
    height: 100vh;
    width: 100vw;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    width: 400px;
    height: 550px;
    border-radius: 30px;
`;

const InterGroup = styled.div`
    margin-bottom: 12px;
`;

const Group = styled.div`
    margin-top: 40px;
`;

const InputBox = styled.input`
    box-sizing: border-box;
    width: 300px;
    height: 40px;
    font-weight: bold;
    font-size: 15px;
    background-color: #ffffff;
    border: 1px solid #D9D9D9;
`;

export const LoginPage = () => {
    return (
        <Container>
            <Content>
                <Title label='로그인' />
                <Group>
                    <InterGroup>
                        <CustomLabel label='아이디' color='#000000'/>
                        <InputBox type='text'/>
                    </InterGroup>
                    <InterGroup>
                        <CustomLabel label='비밀번호' color='#000000' />
                        <InputBox type='password'/>
                    </InterGroup>
                    <InterGroup>
                        <Group>
                            <Button
                                label='로그인'
                                color='#7C7FD1'
                                //onClick={onClick}
                            />
                        </Group>
                    </InterGroup>
                    <InterGroup>
                        <Button
                            label='회원가입'
                            color='#C3C3C3'
                            //onClick={onClick}
                        />
                    </InterGroup>
                    <InterGroup>
                        <ClickLabel label='아이디/비밀번호 찾기' onClick={() => onclick} />
                    </InterGroup>
                </Group>
            </Content>
        </Container>
    )
}
