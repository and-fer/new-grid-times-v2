import React from "react";
import styled from "styled-components";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <HeaderTag>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <MainHeaderActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </MainHeaderActionGroup>

        <Logo />

        <SubscribeCTA>
          <Button>SUBSCRIBE</Button>
          <p>Already a subscriber?</p>
        </SubscribeCTA>
      </MainHeader>
    </HeaderTag>
  );
};

const HeaderTag = styled.header``;

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
`;

const MainHeaderActionGroup = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    gap: 24px;
    color: var(--color-gray-900);

    svg {
      display: block;
    }
  }
`;

const SubscribeCTA = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      font-size: calc(14 / 16 * 1rem);
      color: var(--color-gray-900);
      font-style: italic;
      font-weight: 400;
      text-decoration: underline;
      line-height: 22px;
      margin-top: 6px;
    }
  }
`;

export default Header;
