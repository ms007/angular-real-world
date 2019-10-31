import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ButtonModule } from '@sbb-esta/angular-business';
import { IconHouseModule } from '@sbb-esta/angular-icons';

const SBB_COMMON_MODULES = [ButtonModule];

const SBB_ICONS_MODULES = [IconHouseModule];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [],
  exports: [
    CommonModule,
    RouterModule,
    ...SBB_COMMON_MODULES,
    ...SBB_ICONS_MODULES
  ]
})
export class SharedModule {}
