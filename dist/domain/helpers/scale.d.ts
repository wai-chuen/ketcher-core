/****************************************************************************
 * Copyright 2021 EPAM Systems
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ***************************************************************************/
import { Vec2 } from "../entities";
export interface ScaleOptions {
    scale: number;
}
declare function scaled2obj(v: Vec2, options: ScaleOptions): Vec2;
declare function obj2scaled(v: Vec2, options: ScaleOptions): Vec2;
export declare const Scale: {
    scaled2obj: typeof scaled2obj;
    obj2scaled: typeof obj2scaled;
};
export {};
