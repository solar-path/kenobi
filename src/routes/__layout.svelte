<script>

import "carbon-components-svelte/css/white.css";


  import {
    Header,
    HeaderNav,
    HeaderNavItem,
    HeaderNavMenu,
    SideNav,
    SideNavItems,
    SideNavMenu,
    SideNavMenuItem,
    SideNavLink,
    SideNavDivider,
    SkipToContent,
    Content,
    Grid,
    Row,
    Column,
  } from "carbon-components-svelte";

  let isSideNavOpen = false;
</script>

<Header company="Jco" platformName="Adam" bind:isSideNavOpen href="/" >
  <svelte:fragment slot="skip-to-content">
    <SkipToContent />
  </svelte:fragment>
  <HeaderNav>
    <HeaderNavItem href="/about" text="О программе" />
    <HeaderNavItem href="/contact" text="Связаться" />
    
    <HeaderNavMenu text="Приветствую, Гость">
      <HeaderNavItem href="/auth/login" text="Авторизация" />
      <HeaderNavItem href="/auth/register" text="Регистрация" />
      <HeaderNavItem href="/auth/profile" text="Профиль" />
      <HeaderNavItem href="#" text="Выход" />
    </HeaderNavMenu>
    
  </HeaderNav>
</Header>

<SideNav bind:isOpen={isSideNavOpen}>
  <SideNavItems>
    <SideNavLink text="Link 1" />
    <SideNavLink text="Link 2" />
    <SideNavLink text="Link 3" />
    <SideNavMenu text="Menu">
      <SideNavMenuItem href="/" text="Link 1" />
      <SideNavMenuItem href="/" text="Link 2" />
      <SideNavMenuItem href="/" text="Link 3" />
    </SideNavMenu>
    <SideNavDivider />
    <SideNavLink text="Link 4" />
  </SideNavItems>
</SideNav>

<Content>
  <Grid>
    <Row>
      <Column>
        <slot/>
      </Column>
    </Row>
  </Grid>
</Content>