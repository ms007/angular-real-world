import { NgModule } from '@angular/core';
import { ButtonModule } from '@sbb-esta/angular-business';
import { IconHouseModule } from '@sbb-esta/angular-icons';

import { MenubarComponent } from './components';

const SBB_COMMON_MODULES = [ButtonModule];

const SBB_ICONS_MODULES = [IconHouseModule];

const COMMON_COMPONENTS = [MenubarComponent];

@NgModule({
  imports: [],
  declarations: [...COMMON_COMPONENTS],
  exports: [...SBB_COMMON_MODULES, ...SBB_ICONS_MODULES, ...COMMON_COMPONENTS]
})
export class SharedModule {}
