import { useMemo } from 'react';
import { FOOTER_CONTACTS, FOOTER_SOCIALS } from '../constants';

export const useFooter = () => {
  const contactItems = useMemo(
    () =>
      FOOTER_CONTACTS.map((contact) => ({
        id: contact.id,
        label: contact.label,
        value: contact.value,
        href: contact.href
      })),
    []
  );

  const socialButtons = useMemo(
    () =>
      FOOTER_SOCIALS.map((social) => ({
        id: social.id,
        icon: social.icon,
        label: social.label,
        href: social.href
      })),
    []
  );

  return {
    contactItems,
    socialButtons
  };
};
