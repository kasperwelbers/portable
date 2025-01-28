import { Weak } from "../../../../helpers";
import { PropsUISpinner } from "../../../../types/elements";

import React from "react";

type Props = Weak<PropsUISpinner>;

export const Spinner = ({}: Props): JSX.Element => {
  return (
    <div id="spinner" className="flex flex-row items-center gap-4">
      <div className="w-5 h-5">...loading</div>
    </div>
  );
};
