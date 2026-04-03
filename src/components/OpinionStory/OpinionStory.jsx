import React from "react";
import styled from "styled-components";

import { QUERIES } from "../../constants";

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <Anchor href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <div>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </div>
      </Wrapper>
    </Anchor>
  );
};

const Anchor = styled.a`
  border-bottom: 1px solid var(--color-gray-300);
  padding: 16px 0;

  &:last-of-type {
    border-bottom: revert;
  }
`;

const Wrapper = styled.article`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;

  color: var(--color-gray-900);

  @media ${QUERIES.tabletOnly} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;

  @media ${QUERIES.tabletOnly} {
  }
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
