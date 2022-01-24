import React from 'react';
import { itemName } from '../enum';
export { generateFakeResume } from './genarateFakeData';

export function getItemCategoryName(
  e: React.MouseEvent<HTMLElement>
): itemName {
  // const category = (e.target as Element).attributes.getNamedItem(
  //   'data-category'
  // );
  // console.log(category);
  if (
    (e.target as Element).classList.contains('add-education-button') ||
    (e.target as Element).classList.contains('delete-education-button')
  ) {
    return itemName.education;
  } else {
    return itemName.workExperience;
  }
}
