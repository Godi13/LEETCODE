/*
 * @lc app=leetcode.cn id=146 lang=cpp
 *
 * [146] LRU 缓存机制
 */

// @lc code=start
class LRUCache {
public:
    LRUCache(int capacity) {
        this->capacity = capacity;
        head = new Node();
        tail = new Node();
        head->next = tail;
        tail->pre = head;
    }

    int get(int key) {
        if (h.find(key) == h.end()) {
            return -1;
        }

        Node* node = h[key];
        remove(node);
        insert(head, node);
        return node->value;
    }

    void put(int key, int value) {
        if (h.find(key) == h.end()) {
            Node* node = new Node();
            node->key = key;
            node->value = value;
            h[key] = node;
            insert(head, node);
            if (h.size() > capacity) {
                h.erase(tail->pre->key);
                remove(tail->pre);
            }
        } else {
            Node* node = h[key];
            node->value = value;
            remove(node);
            insert(head, node);
        }
    }
private:
    struct Node
    {
        int key;
        int value;
        Node* pre;
        Node* next;
    };
    int capacity;
    Node* head;
    Node* tail;
    unordered_map<int, Node*> h;

    void remove(Node* node) {
        node->pre->next = node->next;
        node->next->pre = node->pre;
    };

    void insert(Node* p, Node* node) {
        p->next->pre = node;
        node->next = p->next;
        p->next = node;
        node->pre = p;
    };
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache* obj = new LRUCache(capacity);
 * int param_1 = obj->get(key);
 * obj->put(key,value);
 */
// @lc code=end

