import Projection from "./projector";
import ProjectionArray from "./projectorArray";

class DTO {
  static get take() {
    return Projection;
  }
  static get takeArray() {
    return ProjectionArray;
  }
}

export default DTO;
