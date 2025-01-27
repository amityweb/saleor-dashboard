import Link from "@dashboard/components/Link";
import { ProductTypeKindEnum } from "@dashboard/graphql";
import { productAddUrl } from "@dashboard/products/urls";
import { productTypeAddUrl } from "@dashboard/productTypes/urls";
import React from "react";
import { FormattedMessage } from "react-intl";

import { giftCardsListHeaderMenuItemsMessages as messages } from "../messages";
import { useHeaderStyles as useStyles } from "../styles";

interface GiftCardsListHeaderAlertContentProps {
  giftCardProductTypesExist: boolean;
  giftCardProductsExist: boolean;
}

const GiftCardsListHeaderAlertContent: React.FC<
  GiftCardsListHeaderAlertContentProps
> = ({ giftCardProductTypesExist, giftCardProductsExist }) => {
  const classes = useStyles({});

  const giftCardProductTypeUrl = productTypeAddUrl({
    kind: ProductTypeKindEnum.GIFT_CARD,
  });

  const giftCardCreateGiftCardProductUrl = productAddUrl();

  if (!giftCardProductTypesExist) {
    return (
      <FormattedMessage
        {...messages.noGiftCardsProductTypes}
        values={{
          createGiftCardProductType: (
            <Link href={giftCardProductTypeUrl} className={classes.alertLink}>
              <FormattedMessage {...messages.createGiftCardProductType} />
            </Link>
          ),
        }}
      />
    );
  }

  if (!giftCardProductsExist) {
    return (
      <FormattedMessage
        {...messages.noGiftCardsProducts}
        values={{
          createGiftCardProduct: (
            <Link
              href={giftCardCreateGiftCardProductUrl}
              className={classes.alertLink}
            >
              <FormattedMessage {...messages.createGiftCardProduct} />
            </Link>
          ),
        }}
      />
    );
  }

  return null;
};

export default GiftCardsListHeaderAlertContent;
