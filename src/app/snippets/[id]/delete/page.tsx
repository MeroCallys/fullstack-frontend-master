interface SnippetEditPageProps {
  params: {
    id: string;
  };
}

export default function SnippetEditPage(props: SnippetEditPageProps) {
  const id = parseInt(props.params.id);

  return <div>Deleting Snippet ID: {props.params.id}...</div>;
}
