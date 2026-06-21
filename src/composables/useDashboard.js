import { ref } from "vue";
import api from "@/services/api"; 

export function useDashboard() {
  const categories = ref([]);
  const tryouts = ref([]);
  const loading = ref(false);

  const fetchCategories = async () => {
    const res = await api.get("/user/dashboard/category");
    categories.value = res.data.data;
  };

  const fetchPopular = async () => {
    loading.value = true;
    try {
      const res = await api.get("/user/dashboard/tryout/popular");
      tryouts.value = res.data.data;
    } finally {
      loading.value = false;
    }
  };

  const fetchTryouts = async (kategori) => {
    loading.value = true;
    try {
      const res = await api.get("/user/dashboard/tryout", {
        params: kategori ? { kategori } : {},
      });
      tryouts.value = res.data.data;
    } finally {
      loading.value = false;
    }
  };

  return { categories, tryouts, loading, fetchCategories, fetchPopular, fetchTryouts };
}