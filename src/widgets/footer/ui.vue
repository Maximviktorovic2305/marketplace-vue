<script setup lang="ts">
import { reactive } from 'vue';
import { Container } from '@/shared/container';
import { Logo } from '@/shared/logo';
import { Typography } from '@/shared/typography';
import { Icon, type IconType } from '@/shared/icon';

const links = reactive([
  { label: 'О компании', href: '/' },
  { label: 'Контакты', href: '/' },
  { label: 'Вакансии', href: '/' },
  { label: 'Статьи', href: '/' },
  { label: 'Политика обработки персональных данных', href: '/' },
]);

const socials = reactive<{ icon: IconType, href: string }[]>([
  { icon: 'vk', href: '/' },
  { icon: 'ok', href: '/' },
]);
</script>

<template>
  <footer class="footer">
    <Container class="footer__content">
      <div class="footer__logo">
        <Logo orientation="horizontal" bgColor="white"   />
      </div>
      <div class="footer__links">
        <RouterLink v-for="link in links" :key="link.label" :to="link.href">
          <Typography tagName="span" size="xs">{{ link.label }}</Typography>
        </RouterLink>
      </div>
      <div class="footer__social">
        <RouterLink class="social__link" v-for="social in socials" :key="social.icon" :to="social.href">
          <Icon :type="social.icon" />
        </RouterLink>
      </div>
      <div class="footer__contact">
        <a class="contact__link" href="tel: 8 800 777 33 33">
          <Icon type="phone" />
          <Typography tagName="span" size="s">8 800 777 ?? ??</Typography>
        </a>
      </div>
    </Container>
  </footer>
</template>

<style scoped>
.footer {
  height: 126px;
  padding: 24px 0;
  background-color: var(--main-footer);
}

.footer__content {
  display: grid;
  grid-column-gap: 40px;
  grid-row-gap: 16px;
  grid-template-columns: max-content 1fr repeat(2, max-content);
  grid-template-areas: 
    'logo links socials phone'
    'createdBy createdBy createdBy createdBy';
}

.footer__logo {
  grid-area: logo;
}

.footer__logo:deep(svg) {
  width: 64px;
  height: 44px;
}

.footer__links {
  display: flex;
  grid-area: links;
  grid-gap: 40px;
  align-items: center;
}

.footer__social {
  display: flex;
  grid-area: socials;
  grid-gap: 16px;
  align-items: center;
}

.contact__link,
.footer__created-by {
  display: flex;
  gap: 8px;
  align-items: center;
  padding-top: 6px;
}


@media screen and (max-width: 1207px) {
  .footer__content {
     grid-template-areas: 
      'logo links socials phone'
      'logo links socials createdBy';
  }

  .footer__social {
    display: grid;
    grid-row: 1 / 3;
    grid-template-columns: repeat(2, max-content);
    grid-gap: 8px;
    height: max-content;
  }

  .footer__logo {
    grid-row: 1 / 3;
  }
  
  .social__link {
    display: flex;
    height: max-content;
  }

  .footer__links {
    flex-wrap: wrap;
    grid-row: 1 / 3;
    grid-row-gap: 8px;
    max-width: 334px;
  }
}

@media screen and (max-width: 767px) {
  .footer {
    padding-top: 40px;
    height: 206px;
  }

  .footer__created-by {
    display: none;
  }

  .footer__content {
    grid-template-columns: max-content 1fr;
    grid-template-areas: 
    'logo socials'
    'logo phone'
    'links links';
  }

  .footer__logo,
  .footer__social,
  .footer__links {
    grid-row: unset;
  }

  .footer__logo {
    grid-row: 1 / 3;
    display: flex;
    align-items: center;
  }

  .footer__links {
    max-width: unset;
    grid-gap: 16px;
    grid-row-gap: 16px;
    padding-top: 8px;
  }

  .footer__social {
    display: flex;
    grid-gap: 16px;
    grid-row: 1 / 1;
    justify-content: flex-end;
  }

  .footer__logo:deep(svg) {
    width: 93px;
    height: 64px;
  }

  .footer__links:deep(.typography.size_xs) {
    font-size: 12px;
  }

  .contact__link:deep(.typography) {
    font-size: 16px;
  }

  .footer__content {
    max-width: 304px;
  }
}
</style>