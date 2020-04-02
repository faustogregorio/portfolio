export interface Project{
  _id: string;
  name: string;
  description: string;
  tools: Tool[];
  backgroundColor: string;
  descriptionColor: string;
  imageUrl: string;


}
export interface Tool {
  _id: string;
  name: string;
 logoUrl: string;
}
