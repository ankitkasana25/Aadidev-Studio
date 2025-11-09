import CategoryDetail from "@/components/category-detail";

export default async function Page({
  params,
}: {
  params: Promise<{ categoryId: string }>;
}) {
  const { categoryId } = await params;

  const formattedName = categoryId
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <CategoryDetail categoryId={categoryId} categoryName={formattedName} />
  );
}
