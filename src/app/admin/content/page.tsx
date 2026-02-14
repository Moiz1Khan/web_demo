"use client";

import { useState } from "react";
import {
  FileText,
  Plus,
  Pencil,
  ImageIcon,
  X,
  Trash2,
} from "lucide-react";

export type BlogPost = {
  id: string;
  title: string;
  description: string;
  label: string;
  slug: string;
  image?: string;
  createdAt?: string;
};

const initialBlogs: BlogPost[] = [
  {
    id: "1",
    title: "First-Time Buyer Guide",
    description:
      "Everything you need to know before applying for your first UAE home loan.",
    label: "Guides",
    slug: "first-time-buyer-guide",
    createdAt: "2025-01-15",
  },
  {
    id: "2",
    title: "Self-Employed Mortgages",
    description:
      "Proven strategies to get approved with variable income.",
    label: "Tips",
    slug: "self-employed-mortgages",
    createdAt: "2025-01-12",
  },
  {
    id: "3",
    title: "Fixed vs Variable Rates",
    description:
      "Compare pros and cons to make an informed decision for your mortgage.",
    label: "Rates",
    slug: "fixed-vs-variable-rates",
    createdAt: "2025-01-10",
  },
  {
    id: "4",
    title: "Dubai Property Market 2025",
    description:
      "Latest trends and what to expect when buying in the UAE.",
    label: "Market",
    slug: "dubai-property-market-2025",
    createdAt: "2025-01-08",
  },
  {
    id: "5",
    title: "Down Payment Strategies",
    description:
      "How to save for your 20% down payment faster.",
    label: "Savings",
    slug: "down-payment-strategies",
    createdAt: "2025-01-05",
  },
  {
    id: "6",
    title: "Refinancing Your Loan",
    description:
      "When and how to refinance for better rates.",
    label: "Refinance",
    slug: "refinancing-your-loan",
    createdAt: "2025-01-02",
  },
];

const LABEL_OPTIONS = ["Guides", "Tips", "Rates", "Market", "Savings", "Refinance"];

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function AdminContentPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>(initialBlogs);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<BlogPost | null>(null);
  const [form, setForm] = useState<Partial<BlogPost>>({
    title: "",
    description: "",
    label: "",
    slug: "",
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  function openAddModal() {
    setEditingBlog(null);
    setForm({ title: "", description: "", label: "", slug: "" });
    setImagePreview(null);
    setIsModalOpen(true);
  }

  function openEditModal(blog: BlogPost) {
    setEditingBlog(blog);
    setForm({
      title: blog.title,
      description: blog.description,
      label: blog.label,
      slug: blog.slug,
    });
    setImagePreview(blog.image ?? null);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    setEditingBlog(null);
    setForm({ title: "", description: "", label: "", slug: "" });
    setImagePreview(null);
  }

  function handleTitleChange(value: string) {
    setForm((prev) => ({
      ...prev,
      title: value,
      slug: prev?.slug === (prev?.title && slugify(prev.title)) ? slugify(value) : prev?.slug,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.title || !form.description || !form.label) return;

    const slug = form.slug || slugify(form.title);
    const payload = { ...form, slug, image: imagePreview ?? undefined };

    if (editingBlog) {
      setBlogs((prev) =>
        prev.map((b) =>
          b.id === editingBlog.id ? { ...b, ...payload, id: b.id } : b
        )
      );
    } else {
      setBlogs((prev) => [
        ...prev,
        {
          ...payload,
          id: crypto.randomUUID(),
          createdAt: new Date().toISOString().slice(0, 10),
        } as BlogPost,
      ]);
    }
    closeModal();
  }

  function handleDelete(id: string) {
    if (confirm("Delete this blog post?")) {
      setBlogs((prev) => prev.filter((b) => b.id !== id));
    }
  }

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setImagePreview(reader.result as string);
    reader.readAsDataURL(file);
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold mb-1">Content</h2>
          <p className="text-muted-foreground text-sm">
            Manage your blog posts for the website.
          </p>
        </div>
        <button
          onClick={openAddModal}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity shrink-0"
        >
          <Plus className="size-5" />
          Add New Blog
        </button>
      </div>

      {/* Blog section */}
      <div className="border border-border rounded-xl overflow-hidden bg-card">
        <div className="px-6 py-4 border-b border-border bg-secondary/20">
          <h3 className="font-semibold flex items-center gap-2">
            <FileText className="size-5 text-primary" />
            Blog Posts
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            {blogs.length} post{blogs.length !== 1 ? "s" : ""} • These appear in the blog section on the main site
          </p>
        </div>
        <div className="p-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="border border-border rounded-xl p-5 hover:border-primary/30 transition-colors group"
              >
                <div className="flex justify-between items-start gap-3 mb-3">
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                    {blog.label}
                  </span>
                  <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => openEditModal(blog)}
                      className="p-1.5 rounded-lg hover:bg-secondary/50 text-muted-foreground hover:text-foreground"
                      title="Edit"
                    >
                      <Pencil className="size-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(blog.id)}
                      className="p-1.5 rounded-lg hover:bg-red-500/10 text-muted-foreground hover:text-red-500"
                      title="Delete"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                </div>
                <h4 className="font-semibold mb-1.5 line-clamp-2">{blog.title}</h4>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {blog.description}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>/blog/{blog.slug}</span>
                  {blog.createdAt && (
                    <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add / Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
            aria-hidden
          />
          <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-card border border-border rounded-2xl shadow-xl">
            <div className="sticky top-0 px-6 py-4 border-b border-border bg-card flex items-center justify-between">
              <h3 className="font-semibold text-lg">
                {editingBlog ? "Edit Blog Post" : "Add New Blog Post"}
              </h3>
              <button
                onClick={closeModal}
                className="p-2 rounded-lg hover:bg-secondary/50 text-muted-foreground"
              >
                <X className="size-5" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              {/* Image upload */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Featured Image
                </label>
                <div className="relative border-2 border-dashed border-border rounded-xl p-6 flex flex-col items-center justify-center gap-2 hover:border-primary/30 transition-colors min-h-[140px]">
                  {imagePreview ? (
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-secondary/30">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => setImagePreview(null)}
                        className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/50 text-white hover:bg-black/70"
                      >
                        <X className="size-4" />
                      </button>
                    </div>
                  ) : (
                    <>
                      <ImageIcon className="size-10 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        Click to upload or drag and drop
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer rounded-xl"
                      />
                    </>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-1.5">
                  PNG, JPG up to 2MB. Backend integration coming soon.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Title *</label>
                <input
                  type="text"
                  value={form.title ?? ""}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="e.g. First-Time Buyer Guide"
                  className="w-full h-11 px-4 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Description *
                </label>
                <textarea
                  value={form.description ?? ""}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, description: e.target.value }))
                  }
                  placeholder="Brief summary for the blog card..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Label *</label>
                <select
                  value={form.label ?? ""}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, label: e.target.value }))
                  }
                  className="w-full h-11 px-4 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="">Select a label</option>
                  {LABEL_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">URL Slug</label>
                <input
                  type="text"
                  value={form.slug ?? ""}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, slug: e.target.value }))
                  }
                  placeholder="auto-generated from title"
                  className="w-full h-11 px-4 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  /blog/[slug]
                </p>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 h-11 rounded-lg border border-border font-medium hover:bg-secondary/30 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 h-11 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                >
                  {editingBlog ? "Save Changes" : "Create Post"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
