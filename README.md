
# 🚀 Meta Data Retrieval for Data Infrastructure via RAG

[📄 CCF-B  (2024 ICWS)](https://ieeexplore.ieee.org/document/10707445)

🧠  **DOR-RAF** : A RAG + Agent-based Data Characterization Framework

✍️ *Zhuo-fan Shi, Kun Liu, et al.*

---

## 🧩 About the Project

This is the official repository for the paper:

> **Meta Data Retrieval for Data Infrastructure via RAG**
>
> Presented at *IEEE ICWS 2024*

We propose **DOR-RAF** (Digital Object Retrieval via RAG-Agent Fusion), a new framework that integrates Retrieval-Augmented Generation (RAG) and Agent mechanisms to tackle metadata inefficiency, fuzzy requirements, and costly retrieval in modern data infrastructures.

---

## 📌 Highlights

✨ **Why DOR-RAF?**

* 💡 Supports **fuzzy & complex queries** with multi-round dialogue
* 🔍 Combines **keyword** + **vector** search for robust metadata retrieval
* 🤖 Agent decomposes and rewrites queries for intelligent feedback
* 📚 Uses a **custom-built dataset** simulating realistic digital infrastructure

📊 **Key Results**

| Task                                   | DOR-RAF vs. Baselines                        |
| -------------------------------------- | -------------------------------------------- |
| 🎯 Digital Object Retrieval            | +18.6% ↑ F1-score vs. keyword search        |
| 📐 Data Characterization               | +14.5 ↑ Answer Correctness vs. Original RAG |
| 🧠 Faithfulness, Precision, Similarity | Substantially improved!                      |

---

## 🛠️ What's Inside (Coming Soon)

We’re actively preparing the open-source codebase including:

* 📦 **DOR-RAF Framework** (Agent + DO-RAG)
* 🔧 LangGraph-based **Self-RAG implementation**
* 🧪 RAGAS-based **evaluation pipeline**
* 🧾 Custom **digital object dataset** generator
* 🧠 Scripts for embedding models, LLM interface, Elasticsearch, etc.

🕒 Stay tuned! The code and documentation will be released shortly. Follow the repo and ⭐ star it to get updates.

---

## 🧪 Abstract

> Data infrastructures face challenges in metadata retrieval due to inefficiency, ambiguity, and manual costs. DOR-RAF tackles these by integrating Large Language Models (LLMs) and RAG tools via an intelligent Agent. It handles vague queries, decomposes complex tasks, and achieves interactive multi-turn retrieval. Experiments on a custom dataset show clear improvements over traditional keyword-based and vanilla RAG methods in terms of F1, precision, and semantic alignment.

---

## 📖 Citation

If our work inspires yours, please cite us:

```bibtex
@inproceedings{shi2024meta,
  title={Meta data retrieval for data infrastructure via RAG},
  author={Shi, Zhuo-Fan and Liu, Kun and Bai, Shan and Jiang, Yun-Tao and Huo, Tong and Jing, Xiang and Li, Rui-Zhi and Ma, Xin-Jian},
  booktitle={2024 IEEE International Conference on Web Services (ICWS)},
  pages={100--107},
  year={2024},
  organization={IEEE}
}

```

---

## 📬 Contact

* 💬  *Corresponding Author* : [Xin-jian Ma](mailto:maxj@aibd.ac.cn)
* 🧑‍💻  *Lead Maintainer* : [Zhuo-fan Shi](mailto:120l021011@stu.hit.edu.cn)
* 📍  *Affiliations* : National Key Lab of Data Space Technology & Advanced Institute of Big Data, Beijing

---

> ✨ Let's build more intelligent, semantic, and interactive data infrastructures together.

---

## Code

Comming Soon
