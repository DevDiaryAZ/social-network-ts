import s from './Post.module.css';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  padding: 20px;
`

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`

const LikeCount = styled.div`
  margin-left: 10px;
  color: blue;
`

type PropsType = {
    id: number
    postText: string
    likeCount: number
}

export const Post = (props: PropsType) => {
    return (
        <Container>
            <Image
                src="https://n1s2.hsmedia.ru/63/4b/22/634b22e2c742e056c4756c749f6ceab5/2832x4256_0xac120003_16067739081627306764.jpg"
                alt=""/>
            <div>{props.postText}</div>
            <LikeCount>likes {props.likeCount}</LikeCount>
        </Container>
    )
}