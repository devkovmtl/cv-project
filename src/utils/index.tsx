import React from 'react';
import { itemName } from '../enum';

export function getItemCategoryName(
  e: React.MouseEvent<HTMLElement>
): itemName {
  if (
    (e.target as Element).classList.contains('add_education_btn') ||
    (e.target as Element).classList.contains('delete_education_btn')
  ) {
    return itemName.education;
  } else {
    return itemName.workExperience;
  }
}
