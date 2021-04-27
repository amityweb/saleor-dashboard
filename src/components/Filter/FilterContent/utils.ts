import { SingleAutocompleteChoiceType } from "@saleor/components/SingleAutocompleteSelectField";
import { IntlShape } from "react-intl";

import { FilterType } from "../types";

export function getIsFilterMultipleChoices(
  intl: IntlShape
): SingleAutocompleteChoiceType[] {
  return [
    {
      label: intl.formatMessage({
        defaultMessage: "equal to",
        description: "is filter range or value"
      }),
      value: FilterType.SINGULAR
    },
    {
      label: intl.formatMessage({
        defaultMessage: "between",
        description: "is filter range or value"
      }),
      value: FilterType.MULTIPLE
    }
  ];
}
